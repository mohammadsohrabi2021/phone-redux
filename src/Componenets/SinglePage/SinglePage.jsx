import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SinglePageData from '../../Data/SinglePageData/SinglePageData';
import { Grid } from '@mui/material';
function SinglePage() {
    const contacts = useSelector(state => state.reducer)
    const { ContactId } = useParams()
    const [contact, setContact] = useState({})

    useEffect(() => {
        setContact(contacts.filter(item => item.id === Number(ContactId))[0])
    }, [])

    return (

        <Grid container p={5} width={'100%'} >
            {SinglePageData.map(show => (
                <Grid p={2} key={show.id}>
                    {show.name} : {contact[show.name]}
                </Grid>
            ))}
        </Grid>

    );
}

export default SinglePage;