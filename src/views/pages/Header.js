import React from "react";


const Header = () => {
    return (
        <>

            <header className="Main">
                <div className="imgDiv">
                    <img width={80} height={80} src="/public/images/logo.png" />
                    <span className="text">Lista Contatos</span>
                </div>
                <div style={{
                    width: '60%',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <a href="/" style={{
                        textDecoration: 'none',
                        fontSize: '20px',
                        color: 'black'
                    }}>Home</a>
                    <a
                        href="/conteudo"
                        style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            color: 'black'
                        }}
                    >Conteúdo</a>
                    <a
                        href="/tecnologias"
                        style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            color: 'black'
                        }}
                    >Tecnologia</a>
                    <a
                        href="/sobre"
                        style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            color: 'black'
                        }}
                    >Sobre</a>
                    <a
                        href="/contato"
                        style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            color: 'black'
                        }}
                    >Contato</a>
                </div>
            </header>
        </>
    )
}

export default Header