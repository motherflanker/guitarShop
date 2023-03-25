import { createAsyncThunk } from "@reduxjs/toolkit";
import { Guitar, SearchGuitarParams } from "./types";
import axios from "axios";
import pickBy from "lodash/pickBy";
import  identity  from "lodash";

export const fetchGuitars = createAsyncThunk<Guitar[], SearchGuitarParams>(
  "guitar/fetchGuitarsStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Guitar[]>(`https://641d9857945125fff3d1165b.mockapi.io/items`, {
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
