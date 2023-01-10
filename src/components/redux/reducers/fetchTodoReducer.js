import {
  FETCH_TODO_SUCCESS,
  LOADING,
  FETCH_TODO_FAILED,
} from "../actionTypes";

const initialState = {
  errors: "",
  loading: false,
  data: [],
};

const fetchTodoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODO_SUCCESS:
      // console.log("Response", payload);
      return {
        ...state,
        data: payload,
        errors: "",
        loading: false,
      };

    case FETCH_TODO_FAILED:
      return {
        ...state,
        data: null,
        errors: payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default fetchTodoReducer;
