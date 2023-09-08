import axios from 'axios'


const API = axios.create({ baseURL: '167.71.212.18:5000' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);