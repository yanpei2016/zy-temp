import axios from 'axios'
import router from '../router'

export default function request(url, options = {}) {
    const defaultOptions = {
        method: 'get',
        url: url
    };
    const newOptions = { ...defaultOptions, ...options };
    return axios(newOptions)
    .then((res) =>{
        if(res.data.code === "BU0019") {
            router.replace('/login')
            return 
        }
        if(res.data.code !== '000000') {
            newOptions.errorCb&& newOptions.errorCb()
            console.error(res.data.msg)
            return 
        }
        newOptions.successCb&& newOptions.successCb(res.data.data)
    })
    .catch((error) => {
        throw new Error(error)
    });
}