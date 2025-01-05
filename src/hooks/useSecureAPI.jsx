import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const instance = axios.create({
    baseURL: '', /* server url */
    withCredentials: true
}); 

const useSecureAPI = () => {
    const navigate = useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                navigate('/login')
            }
            return Promise.reject(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return instance;
};

export default useSecureAPI;