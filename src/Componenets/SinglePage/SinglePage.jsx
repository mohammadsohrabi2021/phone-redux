import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SinglePageData from '../../Data/SinglePageData/SinglePageData';
import { Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice/reducer';
function SinglePage() {
    const contacts = useSelector(state => state.reducer)
    const { ContactId } = useParams()
    const [contact, setContact] = useState({})

    useEffect(() => {
        setContact(contacts.filter(item => item.id === Number(ContactId))[0])
    }, [])
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteContact(id))
    }
    return (
        <Grid>
            <Grid container justifyContent={'center'} alignItems={'center'} p={5} bgcolor={'red'}>
                {SinglePageData.map(show => (
                    <Grid p={2} key={show.id}>
                        {show.name} : {contact[show.name]}
                    </Grid>
                ))}
                <Grid>
                    <Link to={`/updateContact/${contact.id}`}>
                        <Button variant={'contained'} color={'success'} >
                            <EditIcon />
                        </Button>
                    </Link>
                </Grid>
                <Grid >
                    <Link to={'/'}>
                        <Button variant="contained" color={'error'} onClick={() => handleDelete(contact.id)}>
                            <DeleteIcon />
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default SinglePage;