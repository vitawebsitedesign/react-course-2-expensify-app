import expensesReducer from '../../reducers/expenses';
import {crackers, gum, stockings} from '../fixtures/expenses';

test('should start with correct default state', () => {
    const state = expensesReducer(undefined, {});
    expect(state).toEqual([]);
});

test('should remove expense', () => {
    const state = expensesReducer([crackers, gum, stockings], {
        type: 'REMOVE_EXPENSE',
        id: gum.id
    });
    expect(state).toEqual([crackers, stockings]);
});

test('should add expense', () => {
    const state = expensesReducer([crackers, stockings], {
        type: 'ADD_EXPENSE',
        expense: gum
    });
    expect(state).toEqual([crackers, stockings, gum]);
});

test('should edit expense', () => {
    const id = '1';
    const expense = {
        ...crackers,
        id,
        amt: 499
    };
    const state = expensesReducer([crackers], {
        type: 'EDIT_EXPENSE',
        id,
        expense
    });
    expect(state).toEqual([expense]);
});

test('should not edit an expense when ID not found', () => {
    const id = '1';
    const expense = {
        ...crackers,
        id,
        amt: 499
    };
    const state = expensesReducer([crackers], {
        type: 'EDIT_EXPENSE',
        id: '2',
        expense
    });
    expect(state).toEqual([crackers]);
});
