import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: this.props.expense ? this.props.expense.description : '',
            note: this.props.expense ? this.props.expense.note : '',
            amt: this.props.expense ? (this.props.expense.amt / 100).toString() : '',
            createdAt: (this.props.expense && moment.unix) ? moment.unix(this.props.expense.createdAt / 1000) : moment(),
            calendarFocused: false,
            err: 'Please provide a description and amount'
        };
    }

    onChangeDesc = e => {
        const desc = e.target.value;
        this.setState(() => ({
            desc
        }));
    };

    onChangeNote = e => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onChangeAmt = e => {
        const amt = e.target.value;
        const amtRegex = /^\d*(\.\d{0,2})?$/;
        const amtValid = amt.match(amtRegex);
        if (amtValid) {
            this.setState(() => ({
                amt
            }));
        }
    };

    onDateChange = createdAt => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    onSubmit = e => {
        e.preventDefault();
        const {desc, amt, note, createdAt} = this.state;

        const err = this.onSubmitValidate(desc, amt);
        if (!err) {
            this.props.onSubmit({
                description: desc,
                amt: parseFloat(amt),
                note: note,
                createdAt: createdAt.valueOf()
            });
        }

        this.setState({
            err
        });
    };

    onSubmitValidate = (desc, amt) => {
        if (!desc) {
            return 'Error: Please provide a description';
        } else if (amt === null || amt === undefined || amt === '') {
            return 'Error: Please provide an amount';
        }
        return null;
    };

    render() {
        return (
            <div>
                {this.state.err && <p data-oa-name="err">{this.state.err}</p>}
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="desc">
                        Description:
                        <input type="text" name="desc" value={this.state.desc} onChange={this.onChangeDesc} autoFocus />
                    </label>
                    <label htmlFor="note">
                        Note (optional):
                        <textarea name="note" value={this.state.note} onChange={this.onChangeNote} />
                    </label>
                    <label htmlFor="amt">
                        Amount:
                        <input type="text" name="amt" value={this.state.amt} onChange={this.onChangeAmt} />
                    </label>
                    <SingleDatePicker
                        id="expense-date-picker"
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={() => false}
                        displayFormat="MMM Do, YYYY"
                    />
                    <button>Create expense</button>
                </form>
            </div>
        );
    }
}
