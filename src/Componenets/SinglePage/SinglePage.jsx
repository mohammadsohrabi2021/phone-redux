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
import './SinglePage.css'
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
        <Grid container justifyContent={'center'} alignItems={'center'} height={'80vh'}>
            <Grid className='boxShadow' >
                <Grid p={5}>
                    {SinglePageData.map(show => (
                        <Grid p={1} key={show.id}>
                            {show.name} : {contact[show.name]}
                        </Grid>
                    ))}
                    <Grid  width={'100%'} container justifyContent={'space-between'} alignItems={'center'}>
                        <Grid>
                            <Link to={`/updateContact/${contact.id}`}>
                                <Button variant={'contained'} color={'success'} >
                                    <EditIcon />
                                </Button>
                            </Link>
                        </Grid>
                        <Grid my={1}>
                            <Link to={'/'}>
                                <Button variant="contained" color={'error'} onClick={() => handleDelete(contact.id)}>
                                    <DeleteIcon />
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default SinglePage;