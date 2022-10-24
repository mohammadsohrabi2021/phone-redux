import React from 'react';
import rowTable from '../../Data/HomeData/rowTable';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice/reducer';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Grid, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import {DeleteIcon , EditIcon,VisibilityIcon } from '@mui/icons-material';

function TableRow({ contact }) {
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteContact(id))
    }      

    return (
        <Grid container mt={3} py={2} justifyContent={{ md: 'center' }} alignItems={'center'} style={{ boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
            <Stack direction="row" spacing={2}>
                <Avatar alt="avatar" src="/static/images/avatar/1.jpg" />
            </Stack>
            {rowTable.map(row => (
                <Grid key={row.id} p={1}>
                    <Typography>
                        {row.name}  : {contact[row.name]}
                    </Typography>
                </Grid>
            ))}

            <Grid >
                <Button variant="contained" color={'error'} onClick={() => handleDelete(contact.id)}>
                    <DeleteIcon />
                </Button>
            </Grid>
            <Grid m={1}>
                <Link to={`/contacts/${contact.id}`}>
                    <Button color={'info'} variant={'contained'}>
                        <VisibilityIcon/>
                    </Button>
                </Link>
            </Grid>
            <Grid>
                <Link to={`/updateContact/${contact.id}`}>
                    <Button variant={'contained'} color={'success'} >
                        <EditIcon/>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default TableRow;