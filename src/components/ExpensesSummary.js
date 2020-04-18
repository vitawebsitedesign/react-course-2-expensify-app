import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import expensesTotal from '../selectors/expenses-total';;
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = props => {
    const totalPennies = expensesTotal(props.expenses);
    const total = numeral(totalPennies / 100).format('0,0.00');
    return (
        <div>
            Viewing {props.expenses.length}/{props.numExpensesUnfiltered} expenses totalling ${total}
        </div>
    );
};

const mapStateToProps = state => ({
    numExpensesUnfiltered: state.expenses.length,
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
