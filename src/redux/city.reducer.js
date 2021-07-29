import CityActionTypes from "./cart.type";
import {getCityItems} from "./city-util";
import CITY_DATA from "../Pages/city-data";

const INITIAL_STATE = {
  cityItems: [],
};

const cityReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case CityActionTypes.GET_ITEM:
          return {
              ...state,
              cityItems: getCityItems(CITY_DATA, action.payload)
          };
      default:
          return state;    
  }
};

export default cityReducer;