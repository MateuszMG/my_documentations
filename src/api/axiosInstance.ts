import axiosLibrary from 'axios';

export const axios = axiosLibrary.create({
  baseURL: 'http://localhost:3000/api',
});
