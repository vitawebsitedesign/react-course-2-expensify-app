import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import {gum} from '../fixtures/expenses';
import moment from 'moment';

test('should render correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={gum} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('err')).toBe('Error: Please provide a description');
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'apple';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input[name="desc"]').simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('desc')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'banana';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea[name="note"]').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '23.5';
    wrapper.find('input[name="amt"]').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amt')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.122';
    wrapper.find('input[name="amt"]').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amt')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={gum} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('err')).toBe(null);

    const createdAt = wrapper.state('createdAt').valueOf();
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: 'gum',
        note: 'tastes like chocolate',
        amt: 0.99,
        createdAt
    });
});

test('should set createdAt on date change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const createdAt = moment();
    wrapper.find('[id="expense-date-picker"]').prop('onDateChange')(createdAt);
    expect(wrapper.state('createdAt')).toBe(createdAt);
});

test('should set calendarFocused on calendar focus', () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('[id="expense-date-picker"]').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
