const axios = require('axios').default;

const baseURL = "https://portf-back.herokuapp.com";


export function fetchSocials() {
    return axios.get('http://127.0.0.1:8000/test/')
}


export function postNewMessage(name,email,content) {
    return axios.post(baseURL+'/message/',{
        fullName: name,
        email: email,
        content: content
    })
}
