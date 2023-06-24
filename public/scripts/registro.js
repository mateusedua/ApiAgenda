const isEmail = (data) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(data)) {
        return true;
    } else {
        return false;
    }
}

const validData = (data) => {
    return data === undefined || data === null || data === ''
}

const inputNome = document.getElementById("nome_cadastro");

inputNome.addEventListener("click", () => {
    const loadings = document.getElementsByTagName("p");
    if (loadings.length) {
        loadings[0].remove();
    }
})

const inputEmail = document.getElementById("email_cadastro");

inputEmail.addEventListener("click", () => {
    const loadings = document.getElementsByTagName("p");
    if (loadings.length) {
        loadings[0].remove();
    }
})


const inputPassword = document.getElementById("password_cadastro")

inputPassword.addEventListener("click", () => {
    const loadings = document.getElementsByTagName("p");
    if (loadings.length) {
        loadings[0].remove();
    }
})


// funcao de cadastro
const cadastrar = document.getElementById("buttonCadastro");

cadastrar.addEventListener("click", async () => {
    const nome = document.getElementById("nome_cadastro").value;
    const email = document.getElementById("email_cadastro").value;
    const senha = document.getElementById("password_cadastro").value;

    if (validData(nome)) {
        const p_nome = document.createElement('p')
        p_nome.innerText = "Nome necessario";

        document.getElementById("error_nome").appendChild(p_nome)
    }

    if (validData(email)) {
        const p_email = document.createElement('p')
        p_email.innerText = "Email necessario";

        document.getElementById("error_email").appendChild(p_email)
    }

    if (validData(senha)) {
        const p_senha = document.createElement('p')
        p_senha.innerText = "Senha necessario";

        document.getElementById("error_senha").appendChild(p_senha)
    }

    if (!validData(email) && !isEmail(email)) {
        const p_email_irr = document.createElement('p')
        p_email_irr.innerText = "Email irregular";


        document.getElementById("error_email_irr").appendChild(p_email_irr)
    }

    if (!validData(nome) && !validData(email) && isEmail(email) && !validData(senha)) {
        const result = await fetch('/api/cadastrarUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha
            })

        })

        if (result.status === 200) {


            Swal.fire({
                text: 'Usuario criado',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                return window.location.href = "/"
            })

        }

        if (result.status === 400) {
            Swal.fire({
                text: 'E-mail ja cadastrado '
            })
        }
    }

})