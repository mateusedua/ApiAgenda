const enviar = document.getElementById('enviar');

enviar.addEventListener('click', async () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;


    const result = await fetch('/api/enviarEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        })

    })

    if (result.status === 200) {
        document.getElementById('nome').value = ''
        document.getElementById('email').value = ''
        document.getElementById('assunto').value = ''
        document.getElementById('mensagem').value = ''

        return Swal.fire({
            text: 'E-mail enviado',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }

    if (result.status === 400) {
        return Swal.fire({
            text: 'E-mail não enviado',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
})