import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import {gum} from '../fixtures/expenses';

let editExpenseSpy, historySpy, removeExpenseSpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    historySpy = {
        push: jest.fn()
    };
    removeExpenseSpy = jest.fn();
    wrapper = shallow(<EditExpensePage expense={gum} editExpense={editExpenseSpy} removeExpense={removeExpenseSpy} history={historySpy} />);
});

test('should render', () => {
    const wrapper = shallow(<EditExpensePage />);
    expect(wrapper).toMatchSnapshot();
});

test('should edit expense', () => {
    const editedExpense = {
        ...gum,
        amt: 405
    };
    const evt = {
        e: editedExpense
    };

    wrapper.find('ExpenseForm').simulate('submit', evt);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(evt);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should remove expense', () => {
    wrapper.find('[data-oa-name="btn-remove"]').simulate('click');
    expect(removeExpenseSpy).toHaveBeenCalledWith();
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});
