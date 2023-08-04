import axios from 'axios';
import API_URL from './apiConfig';
import authHeader from './authHeader';

export const signin = ({ email, password }) => {
    return axios.post(API_URL + 'auth', { email, password })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
            }
            if (response.data.refreshToken) {
                localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
            }
            return response.data;
        });
};
export const getAuth = () => {
    return axios.get(API_URL + "auth", { headers: authHeader() });
};
