import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    createRootReducer(),
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  store.runSaga = sagaMiddleware.run;
  sagaMiddleware.run(rootSaga);

  return store;
}
