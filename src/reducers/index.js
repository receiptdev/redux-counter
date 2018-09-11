import number from "./numbers";
import color from "./color";

import { combineReducers } from "redux";

/*
  {
    numberData: {
      number: 0
    },
    colorData: {
      color: 'block'
    }
  }
*/
const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers;
