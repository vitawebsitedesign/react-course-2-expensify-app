const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(e => e.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(e => {
                if (e.id === action.id) {
                    return {
                        ...e,
                        ...action.expense
                    };
                }
                return e;
            });
        default:
            return state;
    }
};

export default expensesReducer;
