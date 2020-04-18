import moment from 'moment';

const nowStr = '2020-04-17';
const now = moment(nowStr);
const yesterday = moment(nowStr).subtract(1, 'days');
const tomorrow = moment(nowStr).add(1, 'days');
const crackers = {
    id: '1',
    description: 'crackers',
    note: 'salt',
    amt: 395,
    createdAt: now
};
const gum = {
    id: '2',
    description: 'gum',
    note: 'chewy',
    amt: 99,
    createdAt: yesterday
};
const stockings = {
    id: '3',
    description: 'stockings',
    note: '',
    amt: 1450,
    createdAt: tomorrow
};

export {
    crackers,
    gum,
    stockings,
    yesterday,
    now,
    tomorrow
};
