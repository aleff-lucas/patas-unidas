const paginas = {

    inicio: {

        header: `
            <h1>Patas Unidas</h1>
            <p>Uma nova chance para cada patinha</p>
        `,

        conteudo: `
            <section>
                <h2>Sobre Nós</h2>

                <p>
                    A Patas Unidas é uma ONG criada para ajudar
                    animais abandonados e em situação de rua,
                    oferecendo cuidado, proteção e uma nova chance
                    para encontrar um lar.
                </p>
            </section>
        `,

        rodape: `
            <p>Telefone: (11) 99999-9999</p>
            <p>Email: patasunidas@email.com</p>
        `
    },


    projetos: {

        header: `
            <h1>Projetos</h1>
            <p>Conheça nossas iniciativas</p>
        `,

        conteudo: `
            <section class="texto-projetos">

                <h2>Projeto de Adoção</h2>

                <p>
                    Nosso projeto ajuda animais resgatados a
                    encontrarem uma família responsável e um novo lar.
                </p>


                <h2>Campanhas de Conscientização</h2>

                <p>
                    Também realizamos campanhas para incentivar
                    a adoção responsável e os cuidados com os animais.
                </p>


                <h2>Resgate de Animais</h2>

                <p>
                    Atuamos no resgate de animais abandonados
                    ou em situação de risco, oferecendo cuidados
                    até que possam ser adotados.
                </p>

            </section>


            <section class="foto-projeto">

                <img
                    src="img/cachorroresgatado.webp"
                    alt="Cachorro resgatado pela ONG"
                >

                <p>
                    Animal resgatado pela Patas Unidas.
                </p>

            </section>
        `,

        rodape: `
            <p>Ajude nossos projetos e faça a diferença.</p>
        `
    },


    cadastro: {

        header: `
            <h1>Cadastro</h1>
            <p>Seja um voluntário da Patas Unidas</p>
        `,

        conteudo: `

            <section class="cadastro-area">

                <h2 class="cadastro-titulo">
                    Cadastro de Voluntário
                </h2>


                <form id="formulario" action="#" method="post">

                    <fieldset class="dados-pessoais">

                        <legend>Dados Pessoais</legend>


                        <label for="nome">
                            Nome:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >


                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            maxlength="14"
                            required
                        >


                        <label for="nascimento">
                            Data de nascimento:
                        </label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >

                    </fieldset>


                    <fieldset class="dados-contato">

                        <legend>Dados de Contato</legend>


                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            maxlength="15"
                            required
                        >


                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="00000-000"
                            pattern="[0-9]{5}-[0-9]{3}"
                            maxlength="9"
                            required
                        >


                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >

                    </fieldset>


                    <button type="submit">
                        Cadastrar
                    </button>

                </form>


                <section class="feedback-item">

                    <h3>Alerta</h3>

                    <div
                        class="alerta"
                        id="alerta"
                        hidden
                    >
                        Cadastro realizado com sucesso!
                    </div>

                </section>


                <section class="feedback-item">

                    <h3>Toast</h3>

                    <button
                        type="button"
                        id="abrirToast"
                    >
                        Mostrar mensagem
                    </button>

                    <div
                        class="toast"
                        id="toast"
                    >
                        Obrigado por se voluntariar!
                    </div>

                </section>


                <section class="feedback-item">

                    <h3>Modal</h3>

                    <button
                        type="button"
                        id="abrirModal"
                    >
                        Abrir modal
                    </button>


                    <dialog id="janelaModal">

                        <h2>
                            Cadastro enviado!
                        </h2>

                        <p>
                            Obrigado por fazer parte do Patas Unidas.
                        </p>

                        <button
                            type="button"
                            id="fecharModal"
                        >
                            Fechar
                        </button>

                    </dialog>

                </section>

            </section>
        `,

        rodape: `
            <p>
                Obrigado por apoiar a Patas Unidas!
            </p>
        `
    }

};