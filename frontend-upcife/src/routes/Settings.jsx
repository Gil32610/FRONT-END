import React from "react";

import Header from "../components/Header";
import Footer from '../components/Footer';
import Copyright from "../components/Copyright";

/* Página Configurações */

const Settings = () => {
    return (
        <div>
            <Header title="Settings" />
            <h1>Settings</h1>
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Settings