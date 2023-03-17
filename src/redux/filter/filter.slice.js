const { createSlice } = require('@reduxjs/toolkit');

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilterAction(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
