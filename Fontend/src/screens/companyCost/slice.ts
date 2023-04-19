import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLoadingAction } from "../../app/commonSlice";
import { ICompanyCost } from "./companyCost.model";
import { ICompanyCostState } from "./propState";
import {
  getCategoriesTree,
} from "./services";
import { defaultFilter } from "../../utils";

const initialState: ICompanyCostState = {
  data: [],
  currentPage: 1,
  count: 0,

};


export const getCategorysTreeAction = createAsyncThunk(
  "category",
  async (filter: any, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoadingAction(true));
      // const state = thunkAPI.getState() as RootState;
      const response: any = await getCategoriesTree(defaultFilter({...filter}));
      thunkAPI.dispatch(setLoadingAction(false));
      
      thunkAPI.dispatch(setPostAction(response?.data || []));
      thunkAPI.dispatch(setPostCountAction(response?.count || 0));
    } catch (error) {
      thunkAPI.dispatch(setLoadingAction(false));
    }
  }
);




export const companyCostSlice = createSlice({
  name: "companyCost",
  initialState,
  reducers: {
    setPostAction: (
      state: ICompanyCostState,
      action: PayloadAction<ICompanyCost[]>
    ) => {
      console.log("action.payload :>> ", action.payload);
      state.data = action.payload;
      state.currentPage = 1;
    },
    setPostCountAction: (
      state: ICompanyCostState,
      action: PayloadAction<number>
    ) => {
      state.count = action.payload;
      // state.currentPage = 1;
    },

  },
});

export const { setPostAction, setPostCountAction } =
  companyCostSlice.actions;

export default companyCostSlice.reducer;
