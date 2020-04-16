import { getApiRepositories } from '../../services/githubAPI';
import * as actions from './searcherAcrions';

import { Repository } from './searcherTypes';

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

const getRepositories = (pages: number, query: string) => (dispatch: any): void => {
  dispatch(actions.getRepositoriesStart());

  getApiRepositories(pages, query)
    .then((res: AxiosType) => {
      dispatch(actions.getRepositoriesSuccess(res.data.items));
      dispatch(actions.setTotalPages(Math.ceil(res.data.total_count / 30)));
    })
    .catch((err: any) => dispatch(actions.getRepositoriesError(err)));
};

export default getRepositories;
