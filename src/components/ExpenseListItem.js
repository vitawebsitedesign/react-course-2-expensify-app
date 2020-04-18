import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amt, createdAt}) => (
    <div>
        <h4>
            Description: {description}
            &nbsp;
            (<Link to={`/edit/${id}`}>Edit</Link>)
        </h4>
        <p>Amount: {numeral(amt).format('0,0.00')}</p>
        <p>Created at: {moment(createdAt).format('Do MMMM, YYYY')}</p>
    </div>
);

export default ExpenseListItem;

