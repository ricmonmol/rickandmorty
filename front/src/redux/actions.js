import axios from "axios";
const { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } = require("./types.js");

export function addFavorite(char) {
  axios.post("http://localhost:3001/rickandmorty/fav", char);
  return {
    type: ADD_FAVORITE,
    payload: char,
  };
}

export function deleteFavorite(id) {
  axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
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
