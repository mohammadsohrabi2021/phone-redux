import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

function TableContact({search}) {
    const contacts = useSelector(state => state.reducer)
    
    return (
        <div>
           
            {contacts.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())).map(contact => (
                <div key={contact.id}>
                    <TableRow contact={contact} />
                </div>
            ))}
        </div>
    );
}

export default TableContact;