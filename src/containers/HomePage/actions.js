import { DELETE_ITEM, HANLDE_ITEM_SUCCESS, ADD_FAVORITE, SAVE_EDIT } from './constants';

export function deleteItem (id) {
  return {
      type: DELETE_ITEM,
      id,
  }
}
export function hanldeSuccess (data) {
  return {
      type: HANLDE_ITEM_SUCCESS,
      data,
  }
}
export function addFavorite (id) {
  return {
      type: ADD_FAVORITE,
      id,
  }
}

export function saveEdit (data) {
  return {
      type: SAVE_EDIT,
      data,
  }
}