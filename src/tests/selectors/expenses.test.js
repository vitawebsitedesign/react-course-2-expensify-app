import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import {
    crackers,
    gum,
    stockings,
    yesterday,
    now} from '../fixtures/expenses';

const expensesArr = [crackers, gum, stockings];

test('should filter by a text value', () => {
    const filteredExpenses = getVisibleExpenses(expensesArr, {
        text: 's',
        sortBy: 'date',
    });
    expect(filteredExpenses).toEqual([crackers, stockings]);
});

test('should filter by default text value', () => {
    const filteredExpenses = getVisibleExpenses(expensesArr, {
        text: '',
        sortBy: 'date',
    });
    expect(filteredExpenses).toEqual([gum, crackers, stockings]);
});

test('should filter by start date', () => {
    const filteredExpenses = getVisibleExpenses(expensesArr, {
        text: '',
        sortBy: 'date',
        startDate: now
    });
    expect(filteredExpenses).toEqual([crackers, stockings]);
});

test('should filter by end date', () => {
    const filteredExpenses = getVisibleExpenses(expensesArr, {
        text: '',
        sortBy: 'date',
        endDate: now
    });
    expect(filteredExpenses).toEqual([gum, crackers]);
});

test('should filter by start and end date', () => {
    const filteredExpenses = getVisibleExpenses(expensesArr, {
        text: '',
        sortBy: 'date',
        startDate: yesterday,
        endDate: now
    });
    expect(filteredExpenses).toEqual([gum, crackers]);
});

test('should sort by date ascending', () => {
    const filteredExpenses = getVisibleExpenses(expensesArr, {
        text: '',
        sortBy: 'date'
    });
    expect(filteredExpenses).toEqual([gum, crackers, stockings]);
});

test('should sort by amount descending', () => {
    const filteredExpenses = getVisibleExpenses(expensesArr, {
        text: '',
        sortBy: 'amt'
    });
    expect(filteredExpenses).toEqual([stockings, crackers, gum]);
});
