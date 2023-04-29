import React, { useState, useEffect } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions'; 
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";

/* Área de criar Departamentos*/

const InputDepartment = (props) => {

    const [name, setName] = useState(props.name)
    const [org, setOrg] = useState(props.org)

    function handleClose() {
        props.handleClose()
    }

    useEffect(() => {
        setName(props.name)
        setOrg(props.org)
    }, [props.open])

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Departamento
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome do Departamento" type="text" variant="outlined" fullWidth
                        value={name} sx={{ marginTop: 4 }}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        id="org" label="Organização" type="text" variant="outlined" fullWidth
                        value={org} sx={{ marginTop: 4 }}
                        onChange={e => setOrg(e.target.value)}
                    />
                    
                </DialogContent>
                <DialogActions style={{ justifyContent: "space-around" }}>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4 , width: 150, marginLeft: 8, marginRight:16 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <InputButton handleClose={handleClose} btnName={props.btnName}/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputDepartment