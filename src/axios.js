import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-app-clone.herokuapp.com/',
});

export default instance;