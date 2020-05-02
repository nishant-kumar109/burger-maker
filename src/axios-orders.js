import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-maker-109.firebaseio.com/'
});

export default instance;