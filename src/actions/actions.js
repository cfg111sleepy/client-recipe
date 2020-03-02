import postsApi from '../untils'

import { POSTS_SET_ITEMS,
         POSTS_APPEND_ITEM,
         POSTS_REMOVE_ITEM } from '../constants'

const PostsListActions = {

    setItems: items => ({
        type: POSTS_SET_ITEMS,
        payload: items,
    }),

    appendItem: item => ({
        type: POSTS_APPEND_ITEM,
        payload: item,
    }),

    removeItem: id => ({
        type: POSTS_REMOVE_ITEM,
        payload: id,
    }),

    fetchItem: id => dispatch => {
        postsApi.get(id).then(({ data }) => {
            dispatch(PostsListActions.appendItem(data));
        });
    },

    fetchRemoveItem: id => dispatch => {
        if (global.confirm('Вы действительно хотите удалить рецепт?')) {
            dispatch(PostsListActions.removeItem(id));
            postsApi.remove(id);
        }
    },

    editItem: (id, obj) => dispatch => {
        postsApi.put(id, obj).then(post => {
            dispatch({
                type: 'EDIT_POST',
                payload: post
            })
        })
    },

    addItem: obj => dispatch => {
        postsApi.post(obj).then(post => {
            dispatch({
                type: 'ADD_POST',
                payload: post
            })
        })
    }, 

    fetchItems: () => dispatch => {
        postsApi.get().then(({ data }) => {
            dispatch(PostsListActions.setItems(data));
        });
    },

};

export default PostsListActions;