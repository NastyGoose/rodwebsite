import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default function configureStore (initialState) {
  const middleware = [thunk];
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  );

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
