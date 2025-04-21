import axios from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`, // Replace with your API base URL
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}` // Replace YOUR_TOKEN_HERE with the actual token
    },
});

export default api;