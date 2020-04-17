import moment from 'moment';
import {
    setTextFilter,
    sortByAmt,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';

test('should generate "set start date" action', () => {
    const aMoment = moment().startOf('day').add(1, 'second');
    const action = setStartDate(aMoment);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: aMoment
    });
});

test('should generate "set end date" action', () => {
    const aMoment = moment().startOf('day').add(1, 'second');
    const action = setEndDate(aMoment);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: aMoment
    });
});

test('should generate "set text filter" action', () => {
    const text = 'eeeeep';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT',
        text
    });
});

test('should generate "sort by amount" action', () => {
    expect(sortByAmt()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate "sort by date" action', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});
