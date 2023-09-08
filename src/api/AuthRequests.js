import axios from 'axios'


const API = axios.create({ baseURL: '167.71.212.18:5000' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
