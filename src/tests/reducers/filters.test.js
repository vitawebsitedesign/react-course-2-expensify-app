import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('should use correct defaults', () => {
    const state = filtersReducer(undefined, '@@INIT');
    expect(state).toEqual({
        text: '',
        sortBy: 'amt',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer({ sortBy: 'date' }, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amt');
});

test('should set sortBy to date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text', () => {
    const text = 'apple';
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT',
        text
    });
    expect(state.text).toBe(text);
});

test('should set start date', () => {
    const date = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        date
    });
    expect(state.startDate).toBe(date);
});

test('should set ebd date', () => {
    const date = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        date
    });
    expect(state.endDate).toBe(date);
});
