import { takeLatest, put } from 'redux-saga/effects';

import { hanldeSuccess } from './actions'
import { DELETE_ITEM, SAVE_EDIT, ADD_FAVORITE } from './constants';

export function* makeDeleteItem({id}) {
    const dataLocal = JSON.parse(localStorage.getItem('collectionItem'));
    const newData = dataLocal.filter(item => item.nasa_id !== id);
    localStorage.setItem('collectionItem', JSON.stringify(newData));
    yield put(hanldeSuccess(newData));
}
export function* makeSaveEditItem({data}) {
    const { nasa_id } = data;
    const dataLocal = JSON.parse(localStorage.getItem('collectionItem'));
    const index = dataLocal.findIndex(item => item.nasa_id === nasa_id);
    dataLocal.splice(index, 1, data);
    localStorage.setItem('collectionItem', JSON.stringify(dataLocal));
    yield put(hanldeSuccess(dataLocal));
}
export function* makeAddFavorite({id}) {
    const newData = JSON.parse(localStorage.getItem('collectionItem'));
    for(let i of newData) {
        if(i.nasa_id === id) {
            if(i.favorite) {
                i.favorite = !i.favorite;
            } else {
                i.favorite = true;
            }
        }
    }
    localStorage.setItem('collectionItem', JSON.stringify(newData));
    yield put(hanldeSuccess(newData));
}

export function* handleCollectionItem() {
    yield takeLatest(DELETE_ITEM, makeDeleteItem);
    yield takeLatest(SAVE_EDIT, makeSaveEditItem);
    yield takeLatest(ADD_FAVORITE, makeAddFavorite);
}