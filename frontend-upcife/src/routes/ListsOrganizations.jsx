import './Lists.css'
import React, { useState } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton'
import InputOrg from '../components/InputOrg';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import DeleteDialog from '../components/DeleteDialog';

/* Página Lista de Organizações */

const orgs = [
    { id: 1, name: 'Dom Bosco', student: '235', parent: '23', score: '7429' },
    { id: 2, name: 'Trajano De Mendonça', student: '569', parent: '57', score: '6325' },
    { id: 3, name: 'Ginasio Pernambucano', student: '789', parent: '68', score: '4312' },
    { id: 4, name: 'ETE Porto Digital', student: '345', parent: '34', score: '2135' },
    { id: 5, name: 'Mariano Texeira', student: '123', parent: '10', score: '987' }
];

const ListsOrganizations = () => {

    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [orgData, setOrgData] = useState({id: 0, name: '', student: '', parent: '', score: ''})
 
    function handleClickOpenCreate() {
        setOpenCreate(true); 
    };

    function handleCloseCreate () {
        setOpenCreate(false);
    };

    function handleClickOpenUpdate(org) {
        setOrgData({
            id: org.id,
            name: org.name,
            student: org.student,
            parent: org.parent,
            score: org.score
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate () {
        setOrgData({
            id: 0,
            name: '',
            student: '',
            parent: '',
            score: ''
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(org) {
        setOrgData({
            id: org.id,
            name: org.name,
            student: org.student,
            parent: org.parent,
            score: org.score
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setOrgData({
            id: 0,
            name: '',
            student: '',
            parent: '',
            score: ''
        })
        setOpenDelete(false)
    }

    return (
        <div>
            <Header title="Lista de Escolas" />

            <InputOrg
                open={openCreate}
                handleClose={handleCloseCreate}
                id={0} name='' student='' parent='' score=''
                btnName="Adicionar"
            />
            <InputOrg
                open={openUpdate}
                handleClose={handleCloseUpdate}
                id={orgData.id} name={orgData.name} student={orgData.student} parent={orgData.parent} score={orgData.score}
            />
            <DeleteDialog
                open={openDelete}
                handleClose={handleCloseDelete}
                name={orgData.name}
            />

            <AddButton handleClickOpen={handleClickOpenCreate}/>
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Instituição</th>
                            <th>Quant. Alunos</th>
                            <th>Pais</th>
                            <th>Score</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orgs.map(org => (
                            <tr key={org.id}>
                                <td>{org.name}</td>
                                <td>{org.student}</td>
                                <td>{org.parent}</td>
                                <td>{org.score}</td>
                                <td>
                                    <div className='icones'>
                                        <UpdateButton
                                            handleClickOpen={_ => handleClickOpenUpdate(org)}
                                        />
                                        
                                        <DeleteButton
                                            handleClickOpen={_ => handleClickOpenDelete(org)}
                                        />
                                    </div>
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

export default ListsOrganizations;