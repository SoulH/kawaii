import axios from "axios";
import env from "react-dotenv";


export default class Api {
    get urlBase() {
        return (env || {}).API_URL;
    }

    get = (path) => new Promise(async (resolve, request) => {
        const url = [this.urlBase, path].join('/');
        const res = await axios.get(url);
        resolve(res.data);
    });

    post = (path, data) => new Promise(async (resolve, request) => {
        const url = [this.urlBase, path].join('/');
        const res = await axios.post(url, data);
        resolve(res.data);
    });
}