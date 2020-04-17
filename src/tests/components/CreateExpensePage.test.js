import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpensePage} from '../../components/CreateExpensePage';
import {gum} from '../fixtures/expenses';

let addExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    addExpenseSpy = jest.fn();
    historySpy = {
        push: jest.fn()
    };
    wrapper = shallow(<CreateExpensePage addExpense={addExpenseSpy} history={historySpy} />);    
});

test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(gum);
    expect(wrapper).toMatchSnapshot();
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseSpy).toHaveBeenLastCalledWith(gum);
});
