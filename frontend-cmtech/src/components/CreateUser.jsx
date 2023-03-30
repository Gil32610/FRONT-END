import React, { useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

/* Área de criar Usuários*/

const CreateUser = (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [cargo, setCargo] = useState('')
    const [setor, setSetor] = useState('')

    function handleClose() {
        props.handleClose()
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Usuário
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome do Usuário" type="text" variant="outlined" fullWidth
                        value={nome} sx={{ marginTop: 4 }}
                        onChange={e => setNome(e.target.value)}
                    />
                    <TextField
                        id="email" label="E-mail" type="email" variant="outlined" fullWidth
                        value={email} sx={{ marginTop: 4 }}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        id="empresa" label="Empresa" type="text" variant="outlined" fullWidth
                        value={empresa} sx={{ marginTop: 4 }}
                        onChange={e => setEmpresa(e.target.value)}
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
                    <Button
                        variant='contained' color='secondary'
                        sx={{ background: '#4B0054', marginTop: 4, marginRight: 12, width: 150 }}
                        onClick={handleClose}
                    >
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateUser