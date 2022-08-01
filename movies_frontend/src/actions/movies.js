import { GET_ACTORS, GET_MOVIES, CREATE_MOVIES, GET_COMMON_ACTORS_MOVIES, MOVIES_ERROR, SELECT_MOVIES} from "./types"
import axios from "axios";

const SERVER=process.env.REACT_APP_SERVER
const ENDPOINT=process.env.REACT_APP_ENDPOINT
const ENDPOINT_ACTORS=process.env.REACT_APP_ENDPOINT_ACTORS
const ENDPOINT_COMMON_ACTORS_MOVIES=process.env.REACT_APP_ENDPOINT_COMMON_ACTORS_MOVIES
//get all actors regs
export const getActors = () => (dispatch, getState)=>{
  axios.get(SERVER+ENDPOINT_ACTORS).then((res)=>{
      dispatch({
          type : GET_ACTORS,
          payload: res.data
      });
  });
}
//get all movies regs
export const getMovies = () => (dispatch, getState)=>{
    axios.get(SERVER+ENDPOINT).then((res)=>{
        dispatch({
            type : GET_MOVIES,
            payload: res.data
        });
    });
}
//create movie
export const createMovie = (lead) => (dispatch, getState) => {
  const configHeaders = {
    headers:{
      'content-type':'application/json'
    }
  };
  axios.post(SERVER+ENDPOINT, lead, configHeaders)
    .then((res) => {
      dispatch({
        type: CREATE_MOVIES,
        payload: res.data,
        text: `Movie ${res.data.title} Added`,
        typealert: "success",
      });
    })
    .catch((err) =>
      dispatch({
        type: MOVIES_ERROR,
        payload: [],
        text: `Error ${err.data}`,
        typealert: "error",
      })
    );
};
//get common actors in movies
export const getCommonActorsMovies = (moviesArray) => (dispatch, getState)=>{
  axios.get(SERVER+ENDPOINT_COMMON_ACTORS_MOVIES+moviesArray.toString())
  .then((res)=>{
      dispatch({
        type : GET_COMMON_ACTORS_MOVIES,
        payload: res.data
      });
  });
}
//set movies selected
export const selectedMoviesEvent = (moviesArray) => (dispatch, getState) => {
  dispatch({
    type: SELECT_MOVIES,
    payload: moviesArray
  });
}