import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setFilterTextSpy, setFilterSortByDateSpy, setFilterSortByAmtSpy, setFilterStartDateSpy, setFilterEndDateSpy, wrapper;

beforeEach(() => {
    setFilterTextSpy = jest.fn();
    setFilterSortByDateSpy = jest.fn();
    setFilterSortByAmtSpy = jest.fn();
    setFilterStartDateSpy = jest.fn();
    setFilterEndDateSpy = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setFilterText={setFilterTextSpy}
            setFilterSortByDate={setFilterSortByDateSpy}
            setFilterSortByAmt={setFilterSortByAmtSpy}
            setFilterStartDate={setFilterStartDateSpy}
            setFilterEndDate={setFilterEndDateSpy}
        />
    );
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt filters', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'carrot';
    wrapper.find('input[type="text"]').simulate('change', {
        target: {
            value
        }
    });
    expect(setFilterTextSpy).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    });
    expect(setFilterSortByDateSpy).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amt'
        }
    });
    expect(setFilterSortByAmtSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment().subtract(1, 'days');
    const endDate = moment().add(1, 'days');
    const wrapperDateRangePicker = wrapper.find('[className="wrapper-date-range-picker"]').children().first();
    wrapperDateRangePicker.simulate('datesChange', {
        startDate,
        endDate
    });
    expect(setFilterStartDateSpy).toHaveBeenCalledWith(startDate);
    expect(setFilterEndDateSpy).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const wrapperDateRangePicker = wrapper.find('[className="wrapper-date-range-picker"]').children().first();
    wrapperDateRangePicker.simulate('focusChange', 'startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
});
