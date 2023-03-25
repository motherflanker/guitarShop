import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";


type PaginationPropsType = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationPropsType> = ({currentPage, onChangePage}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={4}
      forcePage={currentPage - 1}
    />
  );
};
