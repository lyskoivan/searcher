import API from '../../services/githubAPI';
import * as actions from './searcherAcrions';

const getRepositories = (pages: number, query: string) => (dispatch: any): void => {
  dispatch(actions.getRepositoriesStart());

  API(pages, query)
    .then((res: any) => {
      dispatch(actions.getRepositoriesSuccess(res.data.items));
      dispatch(actions.setTotalPages(Math.ceil(res.data.total_count / 30)));
    })
    .catch((err: any) => dispatch(actions.getRepositoriesError(err)));
};

export default getRepositories;
