import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUESR,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETIALS_FAIL,
  PRODUCT_DETIALS_REQUESR,
  PRODUCT_DETIALS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstant";

export const productReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUESR:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productCount: action.payload.productCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductCount: action.payload.filteredProductCount,
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productDetialReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETIALS_REQUESR:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETIALS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETIALS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
