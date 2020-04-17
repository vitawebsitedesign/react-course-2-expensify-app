import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmt, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setFilterStartDate(startDate);
        if (endDate) {
            this.props.setFilterEndDate(endDate);
        }
    };

    onFocusChange = calendarFocused => {
        this.setState(() => ({
            calendarFocused
        }))
    };

    onTextChange = e => {
        this.props.setFilterText(e.target.value);
    };

    onSortByChange = e => {
        let sortByAction = null;
        switch (e.target.value) {
            case 'date':
                this.props.setFilterSortByDate();
                break;
            case 'amt':
                this.props.setFilterSortByAmt();
                break;
            default:
                throw new Error('unhandled sort');
        }
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.onTextChange} value={this.props.filters.text}></input>
                <select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amt">Amount</option>
                </select>
                <div class="wrapper-date-range-picker">
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId="date-range-picker-start-date"
                        endDate={this.props.filters.endDate}
                        endDateId="date-range-picker-end-date"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={() => false}
                        showClearDates={true}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setFilterStartDate: startDate => dispatch(setStartDate(startDate)),
    setFilterEndDate: endDate => dispatch(setEndDate(endDate)),
    setFilterText: text => dispatch(setTextFilter(text)),
    setFilterSortByDate: () => dispatch(sortByDate()),
    setFilterSortByAmt: () => dispatch(sortByAmt())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
