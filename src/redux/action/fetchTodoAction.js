import { FETCH_TO_SUCCESS, FETCH_TO_FAILED, LOADING } from "../action";
import axios from "axios";

const fetchTodoAction = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });
  try{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({
      type: FETCH_TO_SUCCESS,
      payload: res.data,
    })
  }
  catch(err){
    dispatch({
      type: FETCH_TO_FAILED,
      payload: [],
      error: err
    })
  }
};

export default fetchTodoAction
