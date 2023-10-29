import axios from "axios";

export default function AxiosService() {
  const apiUrl = 'http://localhost:8001/api/';


  const http = axios.create({
    baseURL: apiUrl,
    headers: {
       "Content-type": "application/json"
    },
 });

  return {
    http,
  };
}
