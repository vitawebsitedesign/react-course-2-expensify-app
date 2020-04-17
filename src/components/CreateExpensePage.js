import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class CreateExpensePage extends React.Component {
    onSubmit = e => {
        this.props.addExpense(e);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <p>Use the form below to create a new expense.</p>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addExpense: e => dispatch(addExpense(e))
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
