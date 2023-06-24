import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const cadastro = () => {
    return (
        <html>
            <head>
                <link rel='stylesheet' href='/public/styles/global.css' />
            </head>
            <body className='Container'>
                <Header />
                <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        width: "25%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "10px",
                    }}>
                        <input type="text" placeholder="Nome" id="nome_cadastro" className="inputHome" required />
                        <div style={{
                            width: "100%",
                            color: "red"
                        }} id="error_nome"></div>
                        <input type="text" placeholder="E-mail" id="email_cadastro" className="inputHome" required />
                        <div style={{
                            width: "100%",
                            color: "red"
                        }} id="error_email"></div>
                        <div style={{
                            width: "100%",
                            color: "red"
                        }} id="error_email_irr"></div>
                        <input type="password" placeholder="*******" id="password_cadastro" className="inputHome" required />
                        <div style={{
                            width: "100%",
                            color: "red"
                        }} id="error_senha"></div>
                        <div style={{
                            width: "100%",
                        }}>
                            <a href="/">Login</a>
                        </div>
                        <button style={{
                            width: '100%',
                            height: '40px',
                            marginTop: '10px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            backgroundColor: 'black',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '3px'
                        }} id='buttonCadastro'>
                            Cadastrar
                        </button>
                    </div>
                </div>
                <Footer />

                <script type='module' src='/public/scripts/registro.js'></script>
                <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            </body>
        </html>
    )
}

export default cadastro;