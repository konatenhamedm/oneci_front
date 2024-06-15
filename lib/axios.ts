import axios from "axios";

/* export const BASE_URL = "http://makoya.youskil.com/api";
export const BASE_SITE = "http://makoya.youskil.com/uploads/";
const BASE_URL1 = "http://makoya.youskil.com/api"; */
export const BASE_URL = "http://localhost:5000/api";
export const BASEURL = "http://localhost:5000";

export default axios.create({
  baseURL: BASE_URL,
  //headers: { "Content-Type": "application/json" },
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  //headers: { "Content-Type": "application/json" },
});
export const axiosAuthapi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
export const axiosAuthapiFormdata = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    //'Access-Control-Allow-Origin':'*'
}
});
