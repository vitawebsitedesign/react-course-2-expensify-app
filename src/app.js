import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'react-dates/initialize';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({
    description: 'Water Bill',
    amt: 35095,
    createdAt: -1000
}));
store.dispatch(addExpense({
    description: 'Rent',
    amt: 100095,
    createdAt: 3000
}));
store.dispatch(addExpense({
    description: 'Gas Bill',
    amt: 20099,
    createdAt: 1000
}));
store.dispatch(setTextFilter(''));

const {expenses, filters} = store.getState();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

console.log(1);

const appEle = document.getElementById('app');
ReactDOM.render(jsx, appEle);
