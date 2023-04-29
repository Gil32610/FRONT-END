import './Lists.css'
import React, { useState } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton';
import InputDepartment from '../components/InputDepartment';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import DeleteDialog from '../components/DeleteDialog';

/* Página Lista de Departamentos */

const ranking = [
    { id: 1, name: 'Trajano de Mendonça', org: '1º' },
    { id: 2, name: 'ETE Porto Digital', org: '2º' },
    { id: 3, name: 'Ginasio Pernambucano', org: '3º' },
    { id: 4, name: 'Dom Bosco', org: '4º' },
    { id: 5, name: 'Mariano Texeira', org: '5º' },
];

const ListsDepartament = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [departamentData, setDepartmentData] = useState({id: 0, name: "", org: ""})

    function handleClickOpenCreate() {
        setOpenCreate(true)
    }

    function handleCloseCreate() {
        setOpenCreate(false)
    }

    function handleClickOpenUpdate(departament) {
        setDepartmentData({
            id: departament.id,
            name: departament.name,
            org: departament.org
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate() {
        setDepartmentData({
            id: 0,
            name: '',
            org: ''
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(departament) {
        setDepartmentData({
            id: departament.id,
            name: departament.name,
            org: departament.org
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setDepartmentData({
            id: 0,
            name: '',
            org: ''
        })
        setOpenDelete(false)
    }

    return (
        <div>
            <Header title="Lista de Hanking das escolas " />

            

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Escola</th>
                            <th>Posição</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {ranking.map(departament => (
                            <tr key={departament.id}>
                                <td>{departament.name}</td>
                                <td>{departament.org}</td>
                                <td>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='copy'>
                <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    );
};

export default ListsDepartament;