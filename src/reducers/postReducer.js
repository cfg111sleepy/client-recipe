import { POSTS_SET_ITEMS,
         POSTS_APPEND_ITEM,
         POSTS_REMOVE_ITEM } from '../constants'

const initialState = {
    items: null,
};
  
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_SET_ITEMS:
            return { ...state, items: action.payload, };
        case POSTS_APPEND_ITEM:
            return { ...state, items: state.items ? [...state.items, action.payload] : [action.payload] };
        case POSTS_REMOVE_ITEM:
            return { ...state, items: state.items.filter(item => item._id !== action.payload) };
        default:
            return state;
    }
};