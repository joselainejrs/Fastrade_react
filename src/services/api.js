import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://localhost:3000/api" ,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-fastrade")
    }
});


export default api;