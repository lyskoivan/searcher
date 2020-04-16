import axios from 'axios';

const { CancelToken } = axios;

export let cancel: Function;

export const getApiRepositories = (page: number, query: string): Promise<any> =>
  axios
    .get(`https://api.github.com/search/repositories?page=${page}&q=${query}&sort=stars`, {
      cancelToken: new CancelToken((c: Function) => {
        cancel = c;
      }),
    })
    .catch((thrown): void => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      } else {
        throw new Error(thrown);
      }
    });
