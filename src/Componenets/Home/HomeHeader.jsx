import React from 'react';
import { Link } from 'react-router-dom';
import{ Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Grid } from '@mui/material';
import './HomeHeader.css'
function HomeHeader({setSearch,search}) {
    
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    return (
        <Grid py={3} container justifyContent={'space-around'} alignItems={'center'}bgcolor={'gray'} height={100}>
            <h5 className='title' >Mohammad Sohrabi</h5>
            <Grid>
                <input className='input' value={search} onChange={handleSearch} placeholder='Search New User...' />
            </Grid>
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