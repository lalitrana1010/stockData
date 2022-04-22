import axios from 'axios';
import {toast} from 'react-toastify'
const BASE_URL = `https://finnhub.io/api/v1`;

export const apiCall = async ({ url: urlEndpoint, method: method, headers, params, ...rest })  => {
    try {
        const response = await axios({
            method,
            url: !!params ? `${BASE_URL}/${urlEndpoint}?${params}` : `${BASE_URL}/${urlEndpoint}`,
            processData: false,
            cache: false,
            data: rest.data,
            headers: {
                accept: 'application/json',
            }
        });
        return response.data
    } catch (error) {
         toast.error(error)
       
    }
}