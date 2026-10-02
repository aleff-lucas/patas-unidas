const paginaHeader =
    document.getElementById("pagina-header");

const conteudo =
    document.getElementById("conteudo");

const rodape =
    document.getElementById("rodape");


function renderizar(pagina) {

    if (!paginas[pagina]) {

        pagina = "inicio";
    }


    paginaHeader.innerHTML =
        paginas[pagina].header;


    conteudo.innerHTML =
        paginas[pagina].conteudo;


    rodape.innerHTML =
        paginas[pagina].rodape;


    // Classe usada pelo CSS

    if (pagina === "inicio") {

        document.body.className = "index";

    } else {

        document.body.className = pagina;
    }


    // Ativa o cadastro

    if (pagina === "cadastro") {

        ativarCadastro();
    }

}


// =========================
// MENU
// =========================

const links =
    document.querySelectorAll("[data-rota]");


links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();


        const pagina =
            link.getAttribute("data-rota");


        renderizar(pagina);


        history.pushState(
            {},
            "",
            "#" + pagina
        );

    });

});


// =========================
// VOLTAR E AVANÇAR
// =========================

window.addEventListener("popstate", function() {

    const pagina =
        location.hash.replace("#", "") || "inicio";


    renderizar(pagina);

});


// =========================
// INÍCIO
// =========================

const paginaInicial =
    location.hash.replace("#", "") || "inicio";


renderizar(paginaInicial);