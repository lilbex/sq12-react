import { combineReducers } from "redux";
import fetchTodReducer from "./fetchTodoReducer";

const rootReducer = combineReducers({
  todo: fetchTodReducer,
  postTodo: 'Post todo'
});

export default rootReducer;
