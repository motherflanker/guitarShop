import {Guitar, GuitarSliceState, Status} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";
import {fetchGuitars} from "./asyncActions";


const initialState: GuitarSliceState = {
    items: [],
    status: Status.LOADING
}

const guitarSlice = createSlice({
    name: 'guitar',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Guitar[]>){
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGuitars.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchGuitars.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchGuitars.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})

export const {setItems} = guitarSlice.actions

export default guitarSlice.reducer