import axios from 'axios';

const getRepositories = (page: number, query: string): any =>
  axios.get(`https://api.github.com/search/repositories?page=${page}&q=${query}&sort=stars`);

export default getRepositories;
