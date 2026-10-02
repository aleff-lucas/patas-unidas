const CHAVE_CADASTROS = "cadastrosVoluntarios";


function salvarCadastros(cadastros) {

    localStorage.setItem(
        CHAVE_CADASTROS,
        JSON.stringify(cadastros)
    );
}


function obterCadastros() {

    const dados =
        localStorage.getItem(CHAVE_CADASTROS);

    if (!dados) {
        return [];
    }

    try {

        return JSON.parse(dados);

    } catch (erro) {

        return [];

    }
}