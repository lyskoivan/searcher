import React from 'react';

import { Repository } from '../../redux/searcher/searcherTypes';

interface RepositoriesListStateProps {
  repository: Repository;
}

const RepositoriesListItem = ({ repository }: RepositoriesListStateProps): JSX.Element => (
  <li>
    <a href={repository.html_url}>{repository.name}</a>
    <p>{repository.description}</p>
    <p>{repository.stargazers_count}</p>
  </li>
);

export default RepositoriesListItem;
