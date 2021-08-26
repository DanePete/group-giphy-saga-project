import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';

function* rootSaga() {
    
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({}),
    applyMiddleware(logger, sagaMiddleware)

)

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));