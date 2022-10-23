import React from 'react';
import { Link } from 'react-router-dom';
function HeaderLayout() {
    return (
        <div>
            <Link to={'/'}>
                  BACK
            </Link>
        </div>
    );
}

export default HeaderLayout;