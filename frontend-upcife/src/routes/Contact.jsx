import React from "react";

import Header from "../components/Header";
import Copyright from "../components/Copyright";


/* Página Arquivos */

const Contact = () => {
    return (
        <div>
            <Header title="Arquivos" />
            <h1>Últimas edições</h1>
            <div className='copy'>
            
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Contact;