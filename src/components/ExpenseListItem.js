import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amt, createdAt}) => (
    <div>
        <h4>
            Description: {description}
            &nbsp;
            (<Link to={`/edit/${id}`}>Edit</Link>)
        </h4>
        <p>Amount: {amt}</p>
        <p>Created at: {new Date(createdAt).toString()}</p>
        
    </div>
);

export default ExpenseListItem;

