import React from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button } from "@mui/material";

const DeleteDialog = (props) => {

    function handleClose() {
        props.handleClose()
    }

    function onDelete() {
        props.onDelete(props.id)
        props.handleClose()
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Deletar o item:
                </DialogTitle>
                <DialogContent>
                    <p>{props.name}</p>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4, marginRight: 8, width: 150 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant='contained' color='secondary'
                        sx={{ background: '#4B0054', marginTop: 4, marginLeft: 6, width: 150 }}
                        onClick={onDelete}
                    >
                        Deletar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteDialog