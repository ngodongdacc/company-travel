import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  isLoading: boolean;
}

const initialState: CommonState = {
  isLoading: false,
};

export const CommonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoadingAction } = CommonSlice.actions;

export default CommonSlice.reducer;
