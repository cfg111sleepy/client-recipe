import axios from 'axios';


export default {
    get: id => axios.get(`http://localhost:3333/posts${id ? '/' + id : ''}`),
    post: obj => axios.post(`http://localhost:3333/posts/`, {title: obj.title, text: obj.text}),
    remove: id => axios.delete(`http://localhost:3333/posts/${id}`),
    put: (id, obj) => axios.put(`http://localhost:3333/posts/${id}`, obj) 
};