import './Home.css'

import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Copyright from "../components/Copyright";

const sx = { 
    height: '8vh',
    width: '8vh',
    margin: '1vh'
}

/* Página Início */

const Home = () => {
    return(
        <div className='Home'>
            <Header title="Home"/>
            <div className='right-div'> 
                <AccountCircleIcon sx={sx}/>
                <h3 className='text'>Olá, Bem vindo!!</h3>
            </div>
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div> 
    )
} 

export default Home; 