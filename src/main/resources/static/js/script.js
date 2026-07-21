document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. NAVEGAÇÃO DE ABAS
    // ==========================================
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');

            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            item.classList.add('active');
            const activeSection = document.getElementById(targetTab);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        });
    });

    // ==========================================
    // 2. EVENTOS DO DOM
    // ==========================================

    // CREATE: Submissão do Form
    const formMicrobe = document.getElementById("form-microbe");
    if (formMicrobe) {
        formMicrobe.addEventListener("submit", handleCreateMicrobe);
    }

    // READ: Atualizar Tabela
    const btnRefresh = document.getElementById('btn-refresh');
    if (btnRefresh) {
        btnRefresh.addEventListener('click', loadMicrobes);
    }

    const readTabBtn = document.querySelector('[data-tab="tab-read"]');
    if (readTabBtn) {
        readTabBtn.addEventListener('click', loadMicrobes);
    }

    // UPDATE: Buscar dados por ID e Salvar
    const btnFetchUpdate = document.getElementById('btn-fetch-update');
    if (btnFetchUpdate) {
        btnFetchUpdate.addEventListener('click', handleFetchMicrobeForUpdate);
    }

    const formUpdate = document.getElementById('form-update');
    if (formUpdate) {
        formUpdate.addEventListener('submit', handleUpdateMicrobe);
    }

    // DELETE: Apagar por ID
    const btnDelete = document.getElementById('btn-delete');
    if (btnDelete) {
        btnDelete.addEventListener('click', handleDeleteMicrobe);
    }
});

// ==========================================
// 3. OPERAÇÃO: CREATE (POST)
// ==========================================
async function handleCreateMicrobe(event) {
    event.preventDefault(); // Impede o reload da página

    const name = document.getElementById("create-name").value.trim();
    const type = document.getElementById("create-type").value.trim();
    const disease = document.getElementById("create-disease").value.trim();
    const symptoms = document.getElementById("create-symptoms").value.trim();
    const transmission = document.getElementById("create-transmission").value.trim();

    if (!name || !type || !disease || !symptoms || !transmission) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const response = await fetch("/microbe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                type,
                disease,
                symptoms,
                transmission
            })
        });

        if (!response.ok) {
            throw new Error(`Erro no servidor: ${response.status}`);
        }

        const data = await response.json();
        console.log("Criado com sucesso:", data);

        alert("Micróbio cadastrado com sucesso!");
        document.getElementById("form-microbe").reset();

    } catch (error) {
        console.error("Erro ao enviar POST:", error);
        alert("Falha ao salvar o micróbio. Verifique se o servidor backend está rodando.");
    }
}

// ==========================================
// 4. OPERAÇÃO: READ (GET)
// ==========================================
async function loadMicrobes() {
    const tableBody = document.getElementById('microbe-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = '<tr><td colspan="4" class="text-center">Loading...</td></tr>';

    try {
        const response = await fetch('/microbe');

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const microbes = await response.json();

        if (!Array.isArray(microbes) || microbes.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" class="text-center">No microbes found.</td></tr>';
            return;
        }

        tableBody.innerHTML = '';

        microbes.forEach(microbe => {
            const row = document.createElement('tr');

            const tdId = document.createElement('td');
            tdId.textContent = microbe.id ?? '-';

            const tdName = document.createElement('td');
            tdName.textContent = microbe.name ?? '';

            const tdType = document.createElement('td');
            tdType.textContent = microbe.type ?? '';

            const tdDisease = document.createElement('td');
            tdDisease.textContent = microbe.disease ?? '';

            row.appendChild(tdId);
            row.appendChild(tdName);
            row.appendChild(tdType);
            row.appendChild(tdDisease);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-red">Error loading data.</td></tr>';
    }
}

// ==========================================
// 5. OPERAÇÃO: UPDATE (GET por ID + PUT)
// ==========================================
async function handleFetchMicrobeForUpdate() {
    const id = document.getElementById('update-id').value.trim();

    if (!id) {
        alert("Informe o ID do micróbio.");
        return;
    }

    try {
        const response = await fetch(`/microbe/${id}`);
        if (!response.ok) throw new Error("Micróbio não encontrado.");

        const microbe = await response.json();

        document.getElementById('update-name').value = microbe.name || '';
        document.getElementById('update-type').value = microbe.type || '';
        document.getElementById('update-disease').value = microbe.disease || '';
        document.getElementById('update-symptoms').value = microbe.symptoms || '';
        document.getElementById('update-transmission').value = microbe.transmission || '';

    } catch (error) {
        console.error(error);
        alert("Micróbio não encontrado!");
    }
}

async function handleUpdateMicrobe(event) {
    event.preventDefault();

    const id = document.getElementById('update-id').value.trim();
    if (!id) {
        alert("Busque um ID antes de atualizar.");
        return;
    }

    const payload = {
        name: document.getElementById('update-name').value.trim(),
        type: document.getElementById('update-type').value.trim(),
        disease: document.getElementById('update-disease').value.trim(),
        symptoms: document.getElementById('update-symptoms').value.trim(),
        transmission: document.getElementById('update-transmission').value.trim()
    };

    try {
        const response = await fetch(`/microbe/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Falha ao atualizar.");

        alert("Micróbio atualizado com sucesso!");

    } catch (error) {
        console.error(error);
        alert("Erro ao atualizar micróbio.");
    }
}

// ==========================================
// 6. OPERAÇÃO: DELETE (DELETE)
// ==========================================
async function handleDeleteMicrobe() {
    const idInput = document.getElementById('delete-id');
    const id = idInput.value.trim();

    if (!id) {
        alert("Por favor, digite o ID do micróbio a ser removido.");
        return;
    }

    if (!confirm(`Tem certeza que deseja apagar o registro ID ${id}?`)) {
        return;
    }

    try {
        const response = await fetch(`/microbe/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Erro ao apagar registro.");

        alert("Micróbio removido com sucesso!");
        idInput.value = "";

    } catch (error) {
        console.error(error);
        alert("Não foi possível apagar o registro.");
    }
}