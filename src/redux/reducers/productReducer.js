import { ActionTypes } from "../ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADİNG:
      return { ...state, isLoading: true };
    case ActionTypes.SET_ERROR:
      return { ...state, isLoading: false, isError: action.payload.message };
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
