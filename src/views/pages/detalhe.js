import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const detalhe = ({ data }) => {
    return (
        <html>
            <head>
                <link rel='stylesheet' href='/public/styles/global.css' />
            </head>
            <body className='Container'>
                <Header />
                <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: '60%',
                    }}>
                        <span style={{
                            textAlign: 'justify',
                            fontSize: '20px'
                        }}>
                            {data}
                        </span>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default detalhe;