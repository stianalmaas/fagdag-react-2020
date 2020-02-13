/* globals window */
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );

  const reduxStore = createStore(rootReducer, enhancer);

  // run the saga
  sagaMiddleware.run(rootSaga);

  return reduxStore;
};

export default configureStore;
