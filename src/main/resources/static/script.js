document.addEventListener('DOMContentLoaded', () => {
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

    const formMicrobe = document.getElementById('form-microbe');
    if (formMicrobe) {
        formMicrobe.addEventListener('submit', createMicrobe);
    }

    const btnRefresh = document.getElementById('btn-refresh');
    if (btnRefresh) {
        btnRefresh.addEventListener('click', loadMicrobes);
    }

    const readTabBtn = document.querySelector('[data-tab="tab-read"]');
    if (readTabBtn) {
        readTabBtn.addEventListener('click', loadMicrobes);
    }

    const btnFetchUpdate = document.getElementById('btn-fetch-update');
    if (btnFetchUpdate) {
        btnFetchUpdate.addEventListener('click', microbeForUpdate);
    }

    const formUpdate = document.getElementById('form-update');
    if (formUpdate) {
        formUpdate.addEventListener('submit', updateMicrobe);
    }

    const btnDelete = document.getElementById('btn-delete');
    if (btnDelete) {
        btnDelete.addEventListener('click', deleteMicrobe);
    }
});

async function createMicrobe(event) {
    event.preventDefault();

    const name = document.getElementById('create-name').value.trim();
    const type = document.getElementById('create-type').value.trim();
    const disease = document.getElementById('create-disease').value.trim();
    const symptoms = document.getElementById('create-symptoms').value.trim();
    const transmission = document.getElementById('create-transmission').value.trim();

    if (!name || !type || !disease || !symptoms || !transmission) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const response = await fetch('/microbe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                type: type,
                disease: disease,
                symptoms: symptoms,
                transmission: transmission
            })
        });

        if (!response.ok) {
            throw new Error('Server error');
        }

        alert('Microbe registered successfully!');
        document.getElementById('form-microbe').reset();

    } catch (error) {
        console.error(error);
        alert('Failed to save microbe.');
    }
}

async function loadMicrobes() {
    const tableBody = document.getElementById('microbe-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = '<tr><td colspan="4" class="text-center">Loading...</td></tr>';

    try {
        const response = await fetch('/microbe');

        if (!response.ok) {
            throw new Error('Server error');
        }

        const microbes = await response.json();

        if (microbes.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" class="text-center">No microbes found.</td></tr>';
            return;
        }

        tableBody.innerHTML = '';

        for (let i = 0; i < microbes.length; i++) {
            const microbe = microbes[i];
            const row = document.createElement('tr');

            const tdId = document.createElement('td');
            tdId.textContent = microbe.id;

            const tdName = document.createElement('td');
            tdName.textContent = microbe.name;

            const tdType = document.createElement('td');
            tdType.textContent = microbe.type;

            const tdDisease = document.createElement('td');
            tdDisease.textContent = microbe.disease;

            row.appendChild(tdId);
            row.appendChild(tdName);
            row.appendChild(tdType);
            row.appendChild(tdDisease);

            tableBody.appendChild(row);
        }

    } catch (error) {
        console.error(error);
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-red">Error loading data.</td></tr>';
    }
}

async function microbeForUpdate() {
    const id = document.getElementById('update-id').value.trim();

    if (!id) {
        alert('Please enter a microbe ID.');
        return;
    }

    try {
        const response = await fetch('/microbe/' + id);

        if (!response.ok) {
            throw new Error('Microbe not found');
        }

        const microbe = await response.json();

        document.getElementById('update-name').value = microbe.name;
        document.getElementById('update-type').value = microbe.type;
        document.getElementById('update-disease').value = microbe.disease;
        document.getElementById('update-symptoms').value = microbe.symptoms;
        document.getElementById('update-transmission').value = microbe.transmission;

    } catch (error) {
        console.error(error);
        alert('Microbe not found.');
    }
}

async function updateMicrobe(event) {
    event.preventDefault();

    const id = document.getElementById('update-id').value.trim();

    if (!id) {
        alert('Please select a microbe ID first.');
        return;
    }

    const name = document.getElementById('update-name').value.trim();
    const type = document.getElementById('update-type').value.trim();
    const disease = document.getElementById('update-disease').value.trim();
    const symptoms = document.getElementById('update-symptoms').value.trim();
    const transmission = document.getElementById('update-transmission').value.trim();

    try {
        const response = await fetch('/microbe/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                type: type,
                disease: disease,
                symptoms: symptoms,
                transmission: transmission
            })
        });

        if (!response.ok) {
            throw new Error('Update failed');
        }

        alert('Microbe updated successfully!');

    } catch (error) {
        console.error(error);
        alert('Failed to update microbe.');
    }
}

async function deleteMicrobe() {
    const idInput = document.getElementById('delete-id');
    const id = idInput.value.trim();

    if (!id) {
        alert('Please enter the ID to delete.');
        return;
    }

    if (!confirm('Are you sure you want to delete ID ' + id + '?')) {
        return;
    }

    try {
        const response = await fetch('/microbe/' + id, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Delete failed');
        }

        alert('Microbe deleted successfully!');
        idInput.value = '';

    } catch (error) {
        console.error(error);
        alert('Could not delete microbe.');
    }
}