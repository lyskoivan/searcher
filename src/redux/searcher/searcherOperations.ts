import * as actions from './searcherAcrions';
import { getApiRepositories } from '../../services/githubAPI';

import { Dispatch } from '../store';
import { Repository, Error } from './searcherTypes';

interface AxiosDataType {
  items: Repository[];
  total_count: number;
  incomplete_results: boolean;
}

interface AxiosType {
  data: AxiosDataType;
  status: number;
  statusText: string;
}

const getRepositories = (pages: number, query: string) => (dispatch: Dispatch): void => {
  dispatch(actions.getRepositoriesStart());

  getApiRepositories(pages, query)
    .then((res: AxiosType) => {
      dispatch(actions.getRepositoriesSuccess(res.data.items));
      dispatch(actions.setTotalPages(Math.ceil(res.data.total_count / 30)));
    })
    .catch((err: Error) => dispatch(actions.getRepositoriesError(err)));
};

export default getRepositories;
