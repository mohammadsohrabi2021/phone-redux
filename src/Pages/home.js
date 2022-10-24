import React,{useState} from 'react';
import HomeHeader from '../Componenets/Home/HomeHeader';
import TableContact from '../Componenets/Home/TableContact';

function Home() {
    const [search, setSearch] = useState('')
    return (
        <div>
            <HomeHeader setSearch={setSearch}search={search} />
            <TableContact search={search}/>
        </div>
    );
}

export default Home;