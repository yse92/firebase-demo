import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../reducers/Reducer';
import rootSaga from '../api/sagas'


const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

export const store = createStore(
    Reducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)
sagaMiddleware.run(rootSaga) //почему не видит метод run ???

const action = type => store.dispatch({type})
