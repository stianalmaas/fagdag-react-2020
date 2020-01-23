/* globals window */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  console.log('sagaMiddleware', { sagaMiddleware });

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
