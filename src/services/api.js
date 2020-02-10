import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://localhost:5000/api/" ,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-fastrade")
    }
});
export default api;