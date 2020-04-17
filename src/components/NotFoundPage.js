import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>This page does not exist.</p>
        <p>
            <Link to="/">
                Click here to go to the home page.
            </Link>
        </p>
    </div>
);

export default NotFoundPage;
