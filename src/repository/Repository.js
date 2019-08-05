import axios from "axios";

const SERVER_URL = "http://localhost:4040";
const BASE_URL = `${SERVER_URL}/api`;
export default axios.create ({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});