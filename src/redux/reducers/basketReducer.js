import { ActionTypes } from "../ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BASKET_LOADİNG:
      return { ...state, isLoading: true };
    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    case ActionTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };
    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: state.basket.concat(action.payload) };
    case ActionTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((i) =>
        i.id === action.payload ? { ...i, amount: i.amount + 1 } : i
      );

      return { ...state, basket: newBasket };
    case ActionTypes.REMOVE_ITEM:
      const updatedBasket =
        action.payload.amount > 1
          ? state.basket.map((item) =>
              item.id === action.payload.id
                ? { ...item, amount: item.amount - 1 }
                : item
            )
          : state.basket.filter((item) => item.id !== action.payload.id);
      return { ...state, basket: updatedBasket };
    default:
      return state;
  }
};

export default basketReducer;
