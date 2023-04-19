import { combineReducers } from "redux";

import companyCostReducer from "./companyCost/slice";


const screenReducer = combineReducers({
  companyCost: companyCostReducer,
});
export default screenReducer;
