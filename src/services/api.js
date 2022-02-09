import axios from 'axios';

const config = {
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain' },
};
export const Api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  https: config,
});
