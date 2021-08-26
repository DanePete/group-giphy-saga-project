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
    yield takeEvery('CREATE_NEW_SEARCH', getGiph)
}

function* getGiph(action) {
    try {
        const response = yield axios.get(`/api/giph/search/${action.payload}`)
        yield put({ 
            type: 'SET_GIPH_LIST',
            payload: response.data
        })
    } catch (error) {
        
    }
}
const giphList =  (state={}, action) => {
    switch (action.type) {
        case 'SET_GIPH_LIST':
            return action.payload
        default:
            return state
    }

} 
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ giphList }),
    applyMiddleware(logger, sagaMiddleware)

)

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));