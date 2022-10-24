import { Grid, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function LayoutHeader() {
    return (
        <Grid container justifyContent={'space-evenly'} alignItems={'center'} bgcolor={'gray'} height={'100px'}>
            <Link to={'/'}>
                <Button variant="contained" >
                    <ArrowBackIcon />
                    BACK
                </Button>
            </Link>
            <AvatarGroup p={5} max={4}>
                <Avatar alt="image" src="" />
                <h3>
                    User
                </h3>
            </AvatarGroup>
        </Grid>
    );
}

export default LayoutHeader;