import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUESR,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETIALS_FAIL,
  PRODUCT_DETIALS_REQUESR,
  PRODUCT_DETIALS_SUCCESS,
} from "../constants/productConstant";
export const getProduct =
  (keyword = "", page = 1, price = [0, 25000], category, ratings = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PRODUCT_REQUESR,
      });
      let link = `http://localhost:5000/api/v1/products?keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `http://localhost:5000/api/v1/products?keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getProductDetials = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETIALS_REQUESR,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/product/${id}`
    );

    dispatch({
      type: PRODUCT_DETIALS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETIALS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
