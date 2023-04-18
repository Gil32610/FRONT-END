import React, { useEffect, useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";

/* Área de criar Organizações*/

const InputOrg = (props) => {

    const [name, setName] = useState(props.name)
    const [phone, setPhone] = useState(props.phone)
    const [segment, setSegment] = useState(props.segment)
    const [group, setGroup] = useState(props.group)

    function handleClose() {
        props.handleClose()
    }

    useEffect(() => {
        setName(props.name)
        setPhone(props.phone)
        setSegment(props.segment)
        setGroup(props.group)
    }, [props.open])

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Organização
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome da Organização" type="text" variant="outlined" fullWidth
                        value={name} sx={{ marginTop: 4 }}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        id="telefone" label="Telefone" type="text" variant="outlined" fullWidth
                        value={phone} sx={{ marginTop: 4 }}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <TextField
                        id="segmento" label="Segmento" type="text" variant="outlined" fullWidth
                        value={segment} sx={{ marginTop: 4 }}
                        onChange={e => setSegment(e.target.value)}
                    />  
                    <TextField
                        id="grupo" label="Grupo" type="text" variant="outlined" fullWidth
                        value={group} sx={{ marginTop: 4 }}
                        onChange={e => setGroup(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4, marginRight: 12, width: 150 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <InputButton handleClose={handleClose} btnName={"Adicionar"} />
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputOrg