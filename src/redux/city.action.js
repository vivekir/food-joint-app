import CityActionTypes from "./cart.type";

export const getItem = (id) => ({
    type: CityActionTypes.GET_ITEM,
    payload: id,
  });