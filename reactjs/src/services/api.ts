import axios from 'axios';

export const api = axios.create({
  baseURL: "https://user-registration-tdpd.onrender.com"
})