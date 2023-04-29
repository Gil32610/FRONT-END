import React from "react";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';

const UpdateButton = (props) => {

    function handleClickOpen() {
        props.handleClickOpen()
    }

    return (
        <Button onClick={handleClickOpen} sx={{ color:"#4B0054" }}>
            <EditIcon/>
        </Button>
    )
}

export default UpdateButton