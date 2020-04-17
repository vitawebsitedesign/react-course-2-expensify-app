import moment from 'moment';

const getVisibleExpenses = (expenses, filters) => {
    const {text, sortBy, startDate, endDate} = filters;
    return expenses.filter(e => {
        const createdAtMoment = moment(e.createdAt);
        const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;
        const textMatch = e.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt - b.createdAt;
        } else if (sortBy === 'amt') {
            return b.amt - a.amt;
        }
        return 0;
    });
};

export default getVisibleExpenses;
