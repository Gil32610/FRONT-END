import React from "react";
import Copyright from "../components/Copyright";

/* Página Erro */

const ErroPage = () => {
    return(
        <div>
            <h1>Erro 404!</h1>
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
        
    )
}

export default ErroPage;