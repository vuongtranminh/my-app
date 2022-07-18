import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const getToken = () => localStorage.getItem('token');

const instance = axios.create({
    baseURL: baseUrl,
});

instance.interceptors.request.use(async (config) => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${getToken()}`,
        },
    };
});

instance.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (err) => {
        if (!err.response) {
            return alert(err);
        }
        throw err.response;
    },
);

export default instance;
