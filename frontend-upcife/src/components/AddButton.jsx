import React from "react";
import './AddButton.css'
import Button from "@mui/material/Button";

/* Botão para criar departamentos, organizarções, perfis e usuários */

const AddButton = (props) => {

    return (
        <div className="AddButton">
            {props.children}
            <Button
                variant='contained' color='secondary'
                sx={{background: '#4B0054 ', marginRight:12, width:150}}
                onClick={_ => props.handleClickOpen()}
            >
                Adicionar
            </Button>
        </div>
    )
}

export default AddButton;