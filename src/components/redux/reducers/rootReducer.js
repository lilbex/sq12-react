import { combineReducers } from "redux";
import fetchTodoReducer from "./fetchTodoReducer";

const rootReducer = combineReducers({
  todo: fetchTodoReducer,
});

export default rootReducer;
