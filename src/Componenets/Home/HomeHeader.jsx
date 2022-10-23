import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeader() {
    return (
        <div>
            <h5>Mohammad Sohrabi</h5>
            <div>
                <Link to={'/addContact'}>
                     <button>
                        Add Contact
                     </button>
                </Link>
            </div>
        </div>
    );
}

export default HomeHeader;