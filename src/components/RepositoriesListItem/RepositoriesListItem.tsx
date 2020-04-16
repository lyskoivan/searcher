import React from 'react';

import { Repository } from '../../redux/searcher/searcherTypes';

import './RepositoriesListItem.scss';

interface RepositoriesListStateProps {
  repository: Repository;
}

const RepositoriesListItem = ({ repository }: RepositoriesListStateProps): JSX.Element => (
  <li className="repository">
    <article className="repository-header">
      <a href={repository.html_url} className="repository-header-link">
        {repository.name}
      </a>
      <div className="star-wrapper">
        <span className="repository-star" />
        <p className="repository-star-counter">{repository.stargazers_count}</p>
      </div>
    </article>

    <p className="repository-description">{repository.description}</p>
  </li>
);

export default RepositoriesListItem;
