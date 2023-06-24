import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const tecnologias = ({ data }) => {
    return (
        <html>
            <head>
                <link rel='stylesheet' href='/public/styles/global.css' />
            </head>
            <body className='Container'>
                <Header />
                <div style={{
                    width: "100%",
                    height: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '20px'
                }}>
                    <div>
                        <span style={{
                            textAlign: 'justify'
                        }}>
                            {
                                data
                            }
                        </span>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default tecnologias