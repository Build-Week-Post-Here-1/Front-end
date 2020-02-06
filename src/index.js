import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer } from './reducers'
import App from './App';
import 'bootswatch/dist/superhero/bootstrap.min.css'
import './CSS/Style.css'

const initialState = {
    username: null,
    token: null,
    id: null,
    error: null,
    session: 0,
    saved: [],
    results: [],
    smurfs: []
}

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger))
ReactDOM.render(<Provider store={ store }><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
