import React, { useCallback, useEffect, useRef } from "react";
import { useAppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectGuitarData } from "../redux/guitar/selectors";
import { selectFilter } from "../redux/filter/selectors";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/filter/slice";
import { fetchGuitars } from "../redux/guitar/asyncActions";
import { GuitarCard, Skeleton, sortList } from "../components";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Pagination } from "../components";
import qs from "qs";
import { SearchGuitarParams } from "../redux/guitar/types";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const { items, status } = useSelector(selectGuitarData);
  const { sort, categoryId, currentPage, searchValue } =
    useSelector(selectFilter);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const getGuitars = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";
    const search = searchValue;

    dispatch(
      fetchGuitars({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        categoryId: categoryId > 0 ? categoryId : null,
        sortProperty: sort.sortProperty,
        currentPage,
      };
      const queryString = qs.stringify(params, { skipNulls: true });
      navigate(`/?${queryString}`);
    }
    getGuitars();
  }, [categoryId, currentPage, searchValue, sort.sortProperty]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1) as unknown as SearchGuitarParams
      );
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          searchValue: "",
          categoryId: 0,
          currentPage: 0,
          sort: sort || sortList[0],
        })
      );
    }
    isMounted.current = true
  }, []);

  const guitars = items.map((obj: any) => <GuitarCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Guitars</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Error occurred</h2>
          <p>Couldn't load guitars, try later.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : guitars}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
