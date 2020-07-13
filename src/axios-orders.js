import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-97c36.firebaseio.com/',
})


export default instance;