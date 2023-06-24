const login = document.getElementById('buttonLogin');

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

const inputEmail = document.getElementById("email_login");

inputEmail.addEventListener("click", () => {
    const loadings = document.getElementsByTagName("p");
    if (loadings.length) {
        loadings[0].remove();
    }
})

const inputPassword = document.getElementById("password_login");

inputPassword.addEventListener("click", () => {
    const loadings = document.getElementsByTagName("p");
    if (loadings.length) {
        loadings[0].remove();
    }
})

login.addEventListener('click', () => {
    const email = document.getElementById("email_login").value;
    const password = document.getElementById("password_login").value;

    if (validData(email)) {
        const p = document.createElement('p')
        p.innerText = "E-mail necessario"
        document.getElementById("err_email").appendChild(p)

    }

    if (validData(password)) {
        const p = document.createElement('p')
        p.innerText = "Senha necessaria"
        document.getElementById("err_password").appendChild(p)
    }

    if (!validData(email) && !isEmail(email)) {
        const p = document.createElement('p')
        p.innerText = "E-mail invalido"
        document.getElementById("err_email_invalid").appendChild(p)
    }

    if (!validData(email) && !validData(password) && isEmail(email)) {

        fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: password
            })

        }).then(response => {
            if (response.status === 200) {
                Promise.resolve(response.json()).then(value => {
                    localStorage.setItem('user', JSON.stringify(value));
                })
            }

            if (response.status === 404) {
                Swal.fire({
                    text: 'Usuario não encontrado',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }

        })

    }

})