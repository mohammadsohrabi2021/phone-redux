import React from 'react';
import { Link } from 'react-router-dom';
import{ Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Grid } from '@mui/material';

function HomeHeader() {
    return (
        <Grid container justifyContent={'space-around'} alignItems={'center'}>
            <h5>Mohammad Sohrabi</h5>
            <Grid>
                <Link  to={'/addContact'} >
                     <Button   variant="contained"  endIcon={<SendIcon />}>
                        Add User
                     </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default HomeHeader;