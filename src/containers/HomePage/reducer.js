import { ADD_TO_LIST_SUCCESS } from '../Search/constants';
import { HANLDE_ITEM_SUCCESS } from './constants';

const dataLocal = JSON.parse(localStorage.getItem('collectionItem'));
const initiaState = {
  data : dataLocal ? dataLocal : [],
}

const addCollectionReducer = (state = initiaState, action) => {
  switch(action.type) {
    case ADD_TO_LIST_SUCCESS:
      return {data: [...state.data, action.data]}
    case HANLDE_ITEM_SUCCESS:
      return {data: action.data}
    default: 
        return state;
  }
}
export default addCollectionReducer;