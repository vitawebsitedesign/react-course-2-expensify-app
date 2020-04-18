import expensesTotal from '../../selectors/expenses-total';
import {crackers, gum, stockings} from '../fixtures/expenses';

const expenses = [crackers, gum, stockings];

test('should return 0 if no expenses', () => {
    expect(expensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
    expect(expensesTotal([gum])).toBe(gum.amt);
});

test('should correctly add up multiple expenses', () => {
    expect(expensesTotal(expenses)).toBe(crackers.amt + gum.amt + stockings.amt);
});
