import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {crackers, gum} from '../fixtures/expenses';

test('should show correct summary for 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[crackers, gum]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should show correct summary for 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[gum]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should show correct summary for 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
