import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../services/api';

interface DataState {
  loading: boolean;
  error: null | string;
  data: null | any; // Cambia 'any' al tipo adecuado de tus datos
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('/pokemon');
  return response.data;
});

const initialState: DataState = {
  loading: false,
  error: null,
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Something went wrong';
    });
  },
});

export const selectData = (state: {data: DataState}) => state?.data?.data;

export default dataSlice.reducer;
