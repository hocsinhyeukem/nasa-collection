import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchCollectionReducer from './containers/Search/reducer'
import addCollectionReducer from './containers/HomePage/reducer'
import history from './history';

export default function rootReducer() {
  return combineReducers({
    router: connectRouter(history),
    searchCollectionReducer,
    addCollectionReducer,
  });
}
