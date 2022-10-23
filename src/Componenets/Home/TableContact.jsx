import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
function TableContact() {
    const contacts =useSelector(state => state.contacts)
    return (
        <div>
            {contacts.map(contact =>(
                <div key={contact.id}>
                    <TableRow contact={contact}/>
                </div>
            ))}
        </div>
    );
}

export default TableContact;