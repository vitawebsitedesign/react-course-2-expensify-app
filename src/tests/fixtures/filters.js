import moment from 'moment';

const momentObj = moment(0);
const filters = {
    text: '',
    sortBy: 'date',
    startDate: null,
    endDate: null
};
const altFilters = {
    text: 's',
    sortBy: 'amt',
    startDate: momentObj,
    endDate: momentObj.add('1', 'days')
};

export {filters, altFilters};
