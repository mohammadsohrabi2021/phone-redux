import React from 'react';
import rowTable from '../../Data/HomeData/rowTable';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice/reducer';
import { Link } from 'react-router-dom';

function TableRow({ contact }) {
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteContact(id))
    }
    return (
        <div>
            {rowTable.map(row => (
                <div key={row.id}>
                    <div>
                        {row.title}
                    </div>
                    <div>
                        : {contact[row.title]}
                    </div>
                </div>
            ))}
            <div>
                <button onClick={() => handleDelete(contact.id)}>
                    Delete
                </button>
            </div>
            <div>
                <Link to={`/contacts/${contact.id}`}>
                    <button>
                        Info
                    </button>
                </Link>
            </div>
            <div>
                <Link to={`/updateContact/${contact.id}`}>
                    <button>
                        UPDATE
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default TableRow;