import React from 'react';
import {shallow} from 'enzyme';
import {gum} from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render expense list item', () => {
    const wrapper = shallow(<ExpenseListItem {...gum} />);
    expect(wrapper).toMatchSnapshot();
});
