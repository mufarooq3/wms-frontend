import axios from "axios";
import Auth from "./Auth";

const SERVER_URL = "http://localhost:4040";
const BASE_URL = `${SERVER_URL}/api`;
export default axios.create ({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}`
    }
});