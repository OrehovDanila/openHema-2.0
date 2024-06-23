import axios from "axios";

export default function useApi() {

//@ts-ignore
  const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 3000,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  return instance;
}
