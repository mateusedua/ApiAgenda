import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const desenvolvedor = ({ data }) => {
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60%'
                }}>
                    <div style={{
                        width: '60%',
                        fontSize: '20px'
                    }}>
                        <span>
                            {data}
                        </span>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default desenvolvedor