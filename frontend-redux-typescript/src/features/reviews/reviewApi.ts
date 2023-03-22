import {API_URL} from "../../setting/API";
import axios from "../../setting/our_axios";
import {ReviewModel} from "./reviewSlice";
const API = API_URL+"/reviews";
export function apiGetAllReviewForMovie(movieId:string)
{
    console.log('API request send to load all review for movie');
    return axios.get(API+'/movie/'+movieId);
}
export function apiSaveReview(review:ReviewModel)
{
    return axios.post(API,review);
}
export function apiUpdateReview(review:ReviewModel)
{
    return axios.put(API+'/'+review._id,review);
}
export function apiDeleteReview(review:ReviewModel)
{
    return axios.delete(API+'/'+review._id);
}