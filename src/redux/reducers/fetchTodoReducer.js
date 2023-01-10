import { FETCH_TO_SUCCESS, FETCH_TO_FAILED, LOADING } from "../action";

const initialState = {
  error: "",
  loading: true,
  data: [],
};

const fetchTodReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TO_SUCCESS:
      return {
        ...state,
        errors: "",
        data: payload,
        loading: false,
      };

    case FETCH_TO_FAILED:
      return {
        ...state,
        errors: payload.error,
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default fetchTodReducer;
