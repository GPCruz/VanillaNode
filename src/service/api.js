//import axios from 'axios';
const axios = require('axios');

const api = axios.create({
    baseURL: 'https://webhook.site/2acd85bd-39f7-4538-beb6-40e04d384cdc'
})

export default api;