import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   image : []
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    imageUpload: (state, action) => {
      state.image = [...state.image , action.payload];
    },
  },
});

export const {imageUpload} = imageSlice.actions;
export default imageSlice.reducer;