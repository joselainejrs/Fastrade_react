import Axios from 'axios';

const apiFormData = Axios.create({
    baseURL: "http://localhost:5001/api",
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem("usuario-fastrade")
    }
});

export default apiFormData;