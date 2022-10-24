import React from 'react';
import { Link } from 'react-router-dom';
import{ Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Grid } from '@mui/material';

function HomeHeader({setSearch,search}) {
    
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    return (
        <Grid py={3} container justifyContent={'space-around'} alignItems={'center'}bgcolor={'gray'} height={100}>
            <h5 color={'light'}>Mohammad Sohrabi</h5>
            <div style={{ textAlign: 'center' }}>
                <input value={search} onChange={handleSearch} placeholder='Search New User...' />
            </div>
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