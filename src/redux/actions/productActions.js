import axios from "axios";
import { ActionTypes } from "./../ActionTypes";

export const setLoading = () => ({
  type: ActionTypes.SET_LOADİNG,
});

export const setError = (payload) => ({
  type: ActionTypes.SET_ERROR,
  payload,
});

export const setProducts = (payload) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload,
});

//asenkron
//api isteği atıp elde ettiği cevaba göre reducerı bilgilendiren kapsamlı aksiyon
// klasik reduxta aksiyonlarımız asenkron olmaz
// redux thunk middleware ile çözebiliriz
//redux thunk sayesinde aksiyonlarımız api isteği atabilir

export const getProducts = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("http://localhost:3050/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((err) => dispatch(setError(err)));
};
