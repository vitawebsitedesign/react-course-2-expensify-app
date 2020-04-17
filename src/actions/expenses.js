import {uuid} from 'uuidv4';

export const addExpense = ({
    description = '',
    note = '',
    amt = 0,
    createdAt = new Date()
}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amt,
        createdAt
    }
});

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, expense) => ({
    type: 'EDIT_EXPENSE',
    id,
    expense
});
