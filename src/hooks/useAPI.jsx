import axios from 'axios';

const API = axios.create({
    baseURL: '', // server url
  });

export default API;
