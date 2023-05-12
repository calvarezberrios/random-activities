import { createSlice } from "@reduxjs/toolkit";

export const activitiesSlice = createSlice({
  name: "activities",
  initialState: {
    random:
      Array.isArray(JSON.parse(localStorage.getItem("activities"))) &&
      JSON.parse(localStorage.getItem("activities")).length > 0
        ? JSON.parse(localStorage.getItem("activities"))
        : [],
    saved: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    setIsFetching: (state) => {
      state.isFetching = true;
    },
    fetchRandomSuccess: (state, action) => {
      localStorage.setItem("activities", JSON.stringify(action.payload));
      state.random = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    fetchSavedSuccess: (state, action) => {
      state.saved = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    saveActivity: (state, action) => {
      state.saved = action.payload;
    },
    clearSavedActivities: (state) => {
      state.saved = [];
      state.isFetching = false;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsFetching,
  fetchRandomSuccess,
  fetchSavedSuccess,
  fetchError,
  saveActivity,
  clearSavedActivities,
} = activitiesSlice.actions;

export default activitiesSlice.reducer;
