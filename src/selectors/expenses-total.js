export default (expenses) => {
    return expenses.reduce((total, expense) => total + expense.amt, 0);
};
