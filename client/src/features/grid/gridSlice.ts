import { RootState } from '../../app/store'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { Grid, gridStatus } from './types';

export interface GridState {
    loading: true | false;
    grids: Grid[];
    status: gridStatus;
    error: string | null | undefined
}

export const initialState: GridState = {
    loading: false,
    grids: [],
    status: gridStatus.idle,
    error: ''
  }

export const fetchGrids = createAsyncThunk(
    'grid/fetchGrids',
    async () => {
      return await fetch('http://localhost:5000/mock_data')
        .then(res => res.json());
    }
  );

const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchGrids.pending, state => {
            state.loading = true
            state.status = gridStatus.pending
        })

        builder.addCase(fetchGrids.fulfilled, (state, { payload: grids }) => {
            state.loading = false
            state.status = gridStatus.idle
            state.grids = grids.express
            state.error = ''
        })
        
        builder.addCase(fetchGrids.rejected, (state, action) => {
            state.loading = false
            state.status = gridStatus.failed 
            state.grids = [];
            state.error = action.error.message || ""; 
        })
    }
})

export const selectLoading = (state: RootState) => state.grid.loading;
export const selectGrids= (state: RootState) => state.grid.grids;
export const selectError = (state: RootState) => state.grid.error;

export default gridSlice.reducer
