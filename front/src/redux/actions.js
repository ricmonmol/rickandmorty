import axios from "axios";
const {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAV,
  FILTER,
  ORDER,
} = require("./types.js");

export function addFavorite(char) {
  try {
    return async function (dispatch) {
      const response = axios.post(
        "http://localhost:3001/rickandmorty/fav",
        char
      );
      const data = await response.data;
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function deleteFavorite(id) {
  try {
    return async function (dispatch) {
      axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      return dispatch({
        type: DELETE_FAVORITE,
        payload: id,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function getFavorite() {
  try {
    return async function (dispatch) {
      const response = await axios.get(
        "http://localhost:3001/rickandmorty/fav"
      );
      return dispatch({
        type: GET_FAV,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}

export function orderCard(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
