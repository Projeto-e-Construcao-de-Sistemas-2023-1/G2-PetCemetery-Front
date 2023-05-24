import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';


const apiCall = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginPost = async (username, password) => {
    console.log("entrou no loginpost");
    try {
        const response = await apiCall.post('/login', { username, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed. Please try again.');
    }
};