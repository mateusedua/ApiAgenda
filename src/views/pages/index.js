
import React, { useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

const App = ({ data }) => {

    return (
        <html>
            <head>
                <link rel='stylesheet' href='/public/styles/global.css' />
            </head>
            <body className='Container'>
                <Header />
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        width: '50%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            width: '70%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <span style={{
                                textAlign: 'justify',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                                {data}
                            </span>
                        </div>
                    </div>
                    <div style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            width: '60%',
                        }}>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                marginBottom: '10px'
                            }}>
                                <label htmlFor='email' className='labelForm'>E-mail</label>
                                <input
                                    type='text'
                                    placeholder='exemplo@gmail.com'
                                    className='inputHome'
                                    id='email_login'
                                    required />
                            </div>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <label htmlFor='password' className='labelForm'>Senha</label>
                                <input
                                    type='password'
                                    placeholder='******'
                                    className='inputHome'
                                    id="password_login"
                                    required
                                />
                                <a href='/cadastro'>Registrar</a>

                            </div>
                            <div id='error_login' style={{
                                width: "100%",
                                color: "red"
                            }}>

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
                            }} id='buttonLogin'>
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />

                <script type='module' src='/public/scripts/Home.js'></script>

            </body>
        </html>
    )
}
export default App;