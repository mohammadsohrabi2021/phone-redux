import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SinglePageData from '../Data/SinglePageData/SinglePageData';
import './Layout.css'

function LayoutHeader() {
    const contacts = useSelector(state => state.reducer)
    const { ContactId } = useParams()
    const [contact, setContact] = useState({})

    useEffect(() => {
        setContact(contacts.filter(item => item.id === Number(ContactId))[0])
    }, [])
    return (
        <Grid className='container'bgcolor={'gray'} height={'100px'}>
            <Link to={'/'}>
                <Button variant="contained" >
                    <ArrowBackIcon />
                    BACK
                </Button>
            </Link>
            <AvatarGroup className='profile' p={5} max={4}>
                <Avatar  alt="image" src="" />
                <Grid>
                    {SinglePageData.map(show => (
                        <Grid p={0.5} key={show.id}>
                            {contact[show.title]}
                        </Grid>
                    ))}
                </Grid>
            </AvatarGroup>
        </Grid>
    );
}

export default LayoutHeader;