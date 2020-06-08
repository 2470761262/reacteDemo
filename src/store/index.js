import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
//引入异步代码的文件
import sages from './sages';
//redux的中间件
//import thunk from 'redux-thunk';

import createSageMiddleware from 'redux-saga';

const sageMiddleware = createSageMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    //applyMiddleware(thunk),
    applyMiddleware(sageMiddleware),
);

const store = createStore(
    reducer,
    enhancer
);
sageMiddleware.run(sages);
export default store;