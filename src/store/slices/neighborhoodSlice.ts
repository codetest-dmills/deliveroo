import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNeighborhoodData = createAsyncThunk(
  'neighbourhood/setNeighborhood',
  async () => {
    const requestForData = await fetch("/data/restaurants.json");
    const locationData = await requestForData.json();
    return locationData;
  }
);

interface neighborhoodState {
  neighborhood: string,
  restaurants: Array<Object>,
}

const initialState: neighborhoodState = {
  neighborhood: "",
  restaurants: []
}

export const neighborhoodSlice = createSlice({
  name: "neighborhood",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNeighborhoodData.fulfilled, (state, action) => {
      state.neighborhood = action.payload.neighborhood;
      state.restaurants = action.payload.restaurants;
    })
  }
})

export default neighborhoodSlice.reducer;