import axiosPackage from 'axios';

const axios = axiosPackage.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
