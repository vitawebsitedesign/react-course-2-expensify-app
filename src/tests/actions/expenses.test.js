import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import moment from 'moment';

test('should setup the "remove expense" action', () => {
    const id = '0ef316bb-83d5-4787-999d-3fb9dc907e58';
    const action = removeExpense(id);
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id
    })
});

test('should setup the "edit expense" action', () => {
    const id = '93855efa-38d8-4adf-b1c8-bed9f651fd72';
    const createdAt = moment().startOf('day').add(1, 'second').toISOString();
    const expense = {
        id,
        createdAt,
        description: 'some expense description',
        note: 'some expense note',
        amt: 123499
    };

    const action = editExpense(id, expense);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        expense
    });
});

test('should setup the "add expense" action (with default values)', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amt: 0,
            createdAt: expect.any(Date)
        }
    });
});

test('should setup the "add expense" action (with provided values)', () => {
    const createdAt = moment().startOf('day').add(1, 'second').toDate();
    const expense = {
        description: 'some description',
        note: 'some note',
        amt: 12399,
        createdAt
    };

    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});
