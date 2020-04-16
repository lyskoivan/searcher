import React from 'react';
import { connect } from 'react-redux';

import './RepositoriesList.scss';

import RepositoriesListItem from '../RepositoriesListItem';

import { MainState, Repository } from '../../redux/searcher/searcherTypes';
import { getRepositorites } from '../../redux/searcher/searcherSelectors';

interface RepositoriesListStateProps {
  repositories: Array<Repository>;
}

const mapStateToProps = (store: MainState): RepositoriesListStateProps => ({
  repositories: getRepositorites(store),
});

const mapDispatchToProps = {};

type RepositoriesListProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  repositories = [],
}: RepositoriesListStateProps): JSX.Element => (
  <section className="repositories">
    <ul className="repositories-list">
      {repositories.map((repo: Repository) => (
        <RepositoriesListItem key={repo.id} repository={repo} />
      ))}
    </ul>
  </section>
);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);
