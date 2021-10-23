import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://nextar.flip.id/',
  timeout: 30000,
});
