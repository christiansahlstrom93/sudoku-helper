import Axios from "axios";
import dataFormatter from "./dataFormatter";

class API {
    async post(endpoint, requestBody) {
        const raw = await Axios.post(`/api${endpoint}`, requestBody);
        return dataFormatter.formatSudukoFromAPI(raw.data);
    }
}

export default new API();