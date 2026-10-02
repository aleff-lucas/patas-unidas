function ativarCadastro() {

    const formulario =
        document.getElementById("formulario");

    const alerta =
        document.getElementById("alerta");

    const abrirToast =
        document.getElementById("abrirToast");

    const toast =
        document.getElementById("toast");

    const abrirModal =
        document.getElementById("abrirModal");

    const fecharModal =
        document.getElementById("fecharModal");

    const janelaModal =
        document.getElementById("janelaModal");


    if (!formulario) {
        return;
    }


    // =========================
    // RECUPERA CADASTROS
    // =========================

    const cadastros =
        obterCadastros();


    // Recupera o último cadastro

    if (cadastros.length > 0) {

        const ultimoCadastro =
            cadastros[cadastros.length - 1];


        document.getElementById("nome").value =
            ultimoCadastro.nome || "";

        document.getElementById("cpf").value =
            ultimoCadastro.cpf || "";

        document.getElementById("nascimento").value =
            ultimoCadastro.nascimento || "";

        document.getElementById("telefone").value =
            ultimoCadastro.telefone || "";

        document.getElementById("cep").value =
            ultimoCadastro.cep || "";

        document.getElementById("email").value =
            ultimoCadastro.email || "";
    }


    // =========================
    // FORMULÁRIO
    // =========================

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;
            }


            const dados = {

                nome:
                    document.getElementById("nome").value,

                cpf:
                    document.getElementById("cpf").value,

                nascimento:
                    document.getElementById("nascimento").value,

                telefone:
                    document.getElementById("telefone").value,

                cep:
                    document.getElementById("cep").value,

                email:
                    document.getElementById("email").value
            };


            const lista =
                obterCadastros();


            lista.push(dados);


            salvarCadastros(lista);


            alerta.hidden = false;


            formulario.reset();

        }
    );


    // =========================
    // TOAST
    // =========================

    abrirToast.addEventListener(
        "click",
        function() {

            toast.style.display = "block";


            setTimeout(
                function() {

                    toast.style.display = "none";

                },
                3000
            );

        }
    );


    // =========================
    // MODAL
    // =========================

    abrirModal.addEventListener(
        "click",
        function() {

            janelaModal.showModal();

        }
    );


    fecharModal.addEventListener(
        "click",
        function() {

            janelaModal.close();

        }
    );

}