import axios from "axios";

const instance = axios.create({
  baseURL: 'https://todo-app-server-nu.vercel.app',
  withCredentials: true,
});

const useAxios = () => {

  return instance;
}

export default useAxios;