import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const contato = () => {
    return (
        <html>
            <head>
                <link rel='stylesheet' href='/public/styles/global.css' />
            </head>
            <body className='Container'>
                <Header />
                <div style={{
                    width: '100%',
                    height: '60%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            width: '100%'
                        }}>
                            <input className="inputHome" type="text" placeholder="Nome" id="nome" />
                            <input className="inputHome" type="text" placeholder="E-mail" id="email" />
                        </div>
                        <div>
                            <input className="inputHome" type="text" placeholder="Assunto" id="assunto" />
                        </div>
                        <div>
                            <textarea className="textArea" placeholder="Mensagem" id="mensagem"></textarea>
                        </div>
                        <button id="enviar" style={{
                            width: '150px',
                            height: '40px',
                            border: 'none',
                            borderRadius: '3px',
                            fontSize: '16px',
                            color: 'white',
                            backgroundColor: 'black',
                            cursor: 'pointer'
                        }}>
                            Enviar
                        </button>
                    </div>

                </div>
                <Footer />

                <script type='module' src='/public/scripts/main.js'></script>
                <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            </body>
        </html>
    )
}

export default contato;