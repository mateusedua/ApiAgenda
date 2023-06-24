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

login.addEventListener('click', async () => {
    const email = document.getElementById("email_login").value;
    const password = document.getElementById("password_login").value;

    const p = document.createElement('p')
    p.innerText = "E-mail e/ou senha inválidos.";

    if ()

        if (!isEmail(email)) {
            return document.getElementById("error_login").appendChild(p)
        }



})