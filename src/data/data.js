module.exports = {
    data: {
        categoria: [
            { id_categoria: 1, nome: "Pessoal" },
            { id_categoria: 2, nome: "Outros" },
            { id_categoria: 3, nome: "Trabalho" },
            { id_categoria: 4, nome: "Amigos" },
            { id_categoria: 5, nome: "Empresas" },
        ],
        usuario: [
            { id_usuario: "ec29f803-8b2a-4c11-bb1c-6f6f3580be36", nome: "mateus", email: "mateus@gmail.com", senha: "123" },
            { id_usuario: "0ceb980d-b196-412e-a867-f0e54546b4b5", nome: "pedro", email: "pedro@gmail.com", senha: "123" },
            { id_usuario: "2a383e80-d0e3-4e07-9554-553c4ef706eb", nome: "sandro", email: "sandro@gmail.com", senha: "123" },
            { id_usuario: "c39b77e0-5ee8-4d67-8787-5fc0be24a56b", nome: "eduardo", email: "eduardo@gmail.com", senha: "123" },
            { id_usuario: "f0e18162-ae77-4b76-aa00-f604d203eac2", nome: "maria", email: "maria@gmail.com", senha: "123" }
        ],
        contatos: [
            { id_contatos: "624de542-e8cd-4524-8e93-650aa401385d", nome: "teste1", email: "teste1@gmail.com", categoriumIdCategoria: 1 },
            { id_contatos: "4b04e868-cceb-479c-9ad0-13fb3cb6e843", nome: "teste2", email: "teste2@gmail.com", categoriumIdCategoria: 2 },
            { id_contatos: "0821b763-83d2-445e-a223-4fd679bd7791", nome: "teste3", email: "teste3@gmail.com", categoriumIdCategoria: 3 },
            { id_contatos: "9c0e9fff-e945-4718-9175-1a1af266f544", nome: "teste4", email: "teste4@gmail.com", categoriumIdCategoria: 4 },
            { id_contatos: "aad3c5d6-8a75-4bad-870a-a18951b7b7e1", nome: "teste5", email: "teste5@gmail.com", categoriumIdCategoria: 5 }
        ],
        controle: [
            { id_usuario: "ec29f803-8b2a-4c11-bb1c-6f6f3580be36", id_contatos: "624de542-e8cd-4524-8e93-650aa401385d" },
            { id_usuario: "0ceb980d-b196-412e-a867-f0e54546b4b5", id_contatos: "4b04e868-cceb-479c-9ad0-13fb3cb6e843" },
            { id_usuario: "2a383e80-d0e3-4e07-9554-553c4ef706eb", id_contatos: "0821b763-83d2-445e-a223-4fd679bd7791" },
            { id_usuario: "c39b77e0-5ee8-4d67-8787-5fc0be24a56b", id_contatos: "9c0e9fff-e945-4718-9175-1a1af266f544" },
            { id_usuario: "f0e18162-ae77-4b76-aa00-f604d203eac2", id_contatos: "aad3c5d6-8a75-4bad-870a-a18951b7b7e1" }
        ]
    }
}