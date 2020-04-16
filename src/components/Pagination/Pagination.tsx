import ReactPaginate from 'react-paginate';
import React from 'react';
import { connect } from 'react-redux';
import './Pagination.scss';

import { setPageSuccess } from '../../redux/searcher/searcherAcrions';
import { MainState } from '../../redux/searcher/searcherTypes';
import { getPage, getTotalPages } from '../../redux/searcher/searcherSelectors';

interface PaginationStateProps {
  page: number;
  totalPages: number;
}

interface PaginationDispatchProps {
  setPage: Function;
}

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: Function;
}

const mapStateToProps = (store: MainState): PaginationStateProps => ({
  page: getPage(store),
  totalPages: getTotalPages(store),
});

const mapDispatchToProps = (dispatch: any): PaginationDispatchProps => ({
  setPage: (page: number): number => dispatch(setPageSuccess(page)),
});

type PaginationTypeProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Pagination: React.FC<PaginationTypeProps> = ({
  page,
  totalPages,
  setPage,
}: PaginationProps): JSX.Element => {
  const handlePageClick = (data: any | {}): void => {
    setPage(data.selected + 1);
  };

  return (
    <section className="pagination">
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination-list"
        pageClassName="pagination-list-item"
        previousClassName="pagination-list-item"
        nextClassName="pagination-list-item"
        breakClassName="pagination-list-item"
        disabledClassName="pagination-list-item_disabled"
        activeClassName="pagination-list-item_active"
        pageLinkClassName="pagination-list-link"
        previousLinkClassName="pagination-list-link"
        nextLinkClassName="pagination-list-link"
      />
    </section>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
