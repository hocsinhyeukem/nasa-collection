import { call, all } from 'redux-saga/effects';
import { searchCollectionItem } from './containers/Search/saga';
import { handleCollectionItem } from './containers/HomePage/saga';

export default function* rootSaga() {
    yield all([
        call(searchCollectionItem),
        call(handleCollectionItem)
    ])
}