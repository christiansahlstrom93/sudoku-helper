import Axios from "axios";
import dataFormatter from "./dataFormatter";

class API {
    async post(endpoint, requestBody) {
        const response = await Axios.post(`/api${endpoint}`, requestBody);
        return response.data.sudoku;
    }
}

export default new API();