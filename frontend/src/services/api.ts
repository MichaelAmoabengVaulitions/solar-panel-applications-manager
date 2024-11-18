import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://localhost:3000', // Update with your backend's base URL
    headers: {
        'Content-Type': 'application/json',
    },
});
//
// // Add an interceptor to log requests and handle errors (optional)
// api.interceptors.request.use(
//     (config) => {
//         console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`, config.data);
//         return config;
//     },
//     (error) => {
//         console.error('[Request Error]', error);
//         return Promise.reject(error);
//     }
// );
//
// api.interceptors.response.use(
//     (response) => {
//         console.log('[Response]', response.data);
//         return response;
//     },
//     (error) => {
//         console.error('[Response Error]', error.response);
//         return Promise.reject(error.response?.data || error.message);
//     }
// );

export default api;
