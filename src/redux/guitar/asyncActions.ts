import { createAsyncThunk } from "@reduxjs/toolkit";
import { Guitar, SearchGuitarParams } from "./types";
import axios from "axios";
import pickBy from "lodash/pickBy";
import { identity } from "lodash";

export const fetchGuitars = createAsyncThunk<Guitar[], SearchGuitarParams>(
  "guitar/fetchGuitarsStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Guitar[]>("", {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity
      ),
    });
    return data
  }
);
