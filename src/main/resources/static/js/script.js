document.getElementById("form-microbe").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("input-name").value.trim();
    const type = document.getElementById("input-type").value.trim();
    const disease = document.getElementById("input-disease").value.trim();
    const symptoms = document.getElementById("input-symptoms").value.trim();
    const transmission = document.getElementById("input-transmission").value.trim();

    // Como no Spring todas as colunas possuem nullable = false,
    // validamos se todos os campos foram preenchidos:
    if (!name || !type || !disease || !symptoms || !transmission) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    try {
        const resposta = await fetch("/microbe", {
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

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }

        const microbioSalvo = await resposta.json();
        console.log("Salvo com sucesso:", microbioSalvo);

        alert("Micróbio cadastrado com sucesso!");
        document.getElementById("form-microbe").reset();

    } catch (error) {
        console.error("Erro ao cadastrar micróbio:", error);
        alert("Ocorreu um erro ao conectar com o servidor.");
    }
});