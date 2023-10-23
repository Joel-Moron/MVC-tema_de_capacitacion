import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AxiosService() {
  let navigate = useNavigate();
  const apiUrl = 'http://localhost:8000/api/';

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return JSON.parse(tokenString);
  };

  const saveToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userName", JSON.stringify('name'));
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tipo_acceso");
    navigate("/");
  };

  const http = axios.create({
    baseURL: apiUrl,
    headers: {
       "Content-type": "application/json",
       Authorization: `Bearer ${getToken()}`,
    },
 });

  return {
    getToken,
    deleteToken,
    setToken: saveToken,
    http,
  };
}
