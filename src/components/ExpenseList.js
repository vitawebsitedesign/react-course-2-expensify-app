import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = props => {
    const expenses = props.expenses.map(e =>
        <ExpenseListItem
            key={e.id}
            {...e}
        />
    );

    return (
        <ul>
            {
                expenses.length === 0 ? (
                    <p>No expenses</p>
                ) : (
                    <div>{expenses}</div>
                )
            }
        </ul>
    );
};

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
