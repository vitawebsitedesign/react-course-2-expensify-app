import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
    render() {
        return (
            <div>
                <ExpenseForm onSubmit={e => {
                        this.props.editExpense(e);
                        this.props.history.push('/');
                    }}
                    expense={this.props.expense}
                />
                <button onClick={() => {
                    this.props.removeExpense();
                    this.props.history.push('/');
                }} data-oa-name="btn-remove">remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(e => e.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (e) => {
        debugger;
        const expense = {...e};
        expense.amt *= 100;
        dispatch(editExpense(props.match.params.id, expense));
    },
    removeExpense: () => {debugger;dispatch(removeExpense(props.match.params.id));}
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
