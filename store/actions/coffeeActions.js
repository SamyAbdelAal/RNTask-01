import * as actionTypes from "./types";

import axios from "axios";

export const getCoffeeShops = () => {
  console.log("fetch");
  return dispatch => {
    // dispatch(setCoffeeShopsLoading());
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(shops =>
        dispatch({
          type: actionTypes.GET_COFFEESHOPS,
          payload: shops
        })
      )
      .catch(err => console.error(err));
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
