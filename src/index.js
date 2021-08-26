import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
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

ReactDOM.render(<App />, document.getElementById('root'));
