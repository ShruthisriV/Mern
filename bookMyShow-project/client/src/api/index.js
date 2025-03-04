import axios from 'axios';

export const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
});

// Add token to every request
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);