import { 
    SEARCH_COLLECTION_ITEM_SUCCESS,
    OPEN_VIDEO,
    CLOSE_POPUP,
    OPEN_POPUP_SUCCESS,
} from './constants';

export const initiaState = {
    data: false,
    searchFor: false,
    videoLink: false,
    dataPopup: false,
    isPopupOpen: false,
};

const searchCollectionReducer = (state = initiaState, action) => {
    switch(action.type) {
        case SEARCH_COLLECTION_ITEM_SUCCESS:
            return {...state, data: action.data.data, searchFor: action.data.key, isPopupOpen: false}
        case OPEN_VIDEO:
            return {...state, videoLink: action.link, isPopupOpen: false}
        case CLOSE_POPUP:
            return {...state, isPopupOpen: false}
        case OPEN_POPUP_SUCCESS:
            return {...state, dataPopup: action.data, isPopupOpen: true}
        default: 
            return state;
    }
}
export default searchCollectionReducer;