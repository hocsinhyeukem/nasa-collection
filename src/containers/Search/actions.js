import { 
    SEARCH_COLLECTION_ITEM,
    SEARCH_COLLECTION_ITEM_SUCCESS,
    SEARCH_COLLECTION_ITEM_ERROR,
    OPEN_VIDEO,
    OPEN_POPUP,
    CLOSE_POPUP,
    OPEN_POPUP_SUCCESS,
    ADD_TO_LIST,
    ADD_TO_LIST_SUCCESS,
} from './constants';

export function searchCollectionItem (keySearch) {
    return {
        type: SEARCH_COLLECTION_ITEM,
        keySearch,
    }
}
export function searchCollectionItemSuccess (data) {
    return {
        type: SEARCH_COLLECTION_ITEM_SUCCESS,
        data,
    }
}

export function searchCollectionItemError (error) {
    return {
        type: SEARCH_COLLECTION_ITEM_ERROR,
        error,
    }
}

export function openVideo (data) {
    return {
        type: OPEN_VIDEO,
        data,
    }
}

export function openPopup (data) {
    return {
        type: OPEN_POPUP,
        data,
    }
}
export function closePopup () {
    return {
        type: CLOSE_POPUP,
    }
}
export function openPopupSuccess (data) {
    return {
        type: OPEN_POPUP_SUCCESS,
        data,
    }
}

export function addToList (data) {
    return {
        type: ADD_TO_LIST,
        data,
    }
}

export function addToListSuccess (data) {
    return {
        type: ADD_TO_LIST_SUCCESS,
        data,
    }
}