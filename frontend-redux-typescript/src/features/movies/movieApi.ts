import {API_URL} from "../../setting/API";
import axios from "../../setting/our_axios";
const API = API_URL+"/movies";
export function apiGetAllMovie()
{
    console.log('API request send to load all movie');
    return axios.get(API);
}