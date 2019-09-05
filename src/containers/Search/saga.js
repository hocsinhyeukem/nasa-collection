import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
    searchCollectionItemSuccess, 
    addToListSuccess, 
    openPopupSuccess, 
    closePopup 
} from './actions'
import { 
    SEARCH_COLLECTION_ITEM, 
    OPEN_VIDEO, OPEN_POPUP, 
    ADD_TO_LIST 
} from './constants';

export function getLinkVideo(res){
    const str = 'orig.mp4';
    let link = '';
    for(let i of res) {
        const newArr = i.split('');
        if(newArr.slice(-8).join('') === str){
            link = i;
        }
    }
    return link;
}

export function* makeSearchCollectionItem(payload) {
    try {
        const { keySearch } = payload;
            const res = yield fetch(`https://images-api.nasa.gov/search?q=${keySearch}`)
            .then(response => response.json());
            const data = res.collection.items;
            yield put(searchCollectionItemSuccess({data, keySearch}));
    } catch (error) {
        console.log(error);
    }
}

export function* makeOpenVideo({data}) {
    const { href, title } = data;
    const res = yield fetch(href).then(response => response.json());
    const str = 'orig.mp4';
    let link = '';
    for(let i of res) {
        const newArr = i.split('');
        if(newArr.slice(-8).join('') === str){
            link = i;
        }
    }
    yield put(push('/video', {link, title}));
}

export function* makeOpenPopup({data}) {
    const { href, links } = data;
    const dataWidthVideo = {...data.data[0]};
    const res = yield fetch(href).then(response => response.json());
    const videoLink = yield getLinkVideo(res);
    yield dataWidthVideo.video_link = videoLink;
    yield dataWidthVideo.href = href;
    yield dataWidthVideo.linkPreview = links.reduce((init, item)  => {
        if(item.render && item.render === 'image') {
            return init = item.href;
        }
        return init;
    },'');
    yield put(openPopupSuccess(dataWidthVideo));
}

export function* makeAddToList({data}) {
    const { nasa_id } = data;
    const dataLocal = JSON.parse(localStorage.getItem('collectionItem'));
    const index = dataLocal && dataLocal.findIndex(item => item.nasa_id === nasa_id);

    if(index !== null && index !== -1) {
        alert('item already exist');
    } else {
        if(dataLocal) {
            let arr = [...dataLocal, data];
            localStorage.setItem('collectionItem', JSON.stringify(arr));
        } else {
            localStorage.setItem('collectionItem', JSON.stringify([data]));
        }
        yield put(addToListSuccess(data));
        yield put(closePopup());
        yield put(push('/'));
    }
}

export function* searchCollectionItem() {
    yield takeLatest(SEARCH_COLLECTION_ITEM, makeSearchCollectionItem);
    yield takeLatest(OPEN_VIDEO, makeOpenVideo);
    yield takeLatest(OPEN_POPUP, makeOpenPopup);
    yield takeLatest(ADD_TO_LIST, makeAddToList);
}