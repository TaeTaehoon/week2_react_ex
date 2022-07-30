import { combineReducers, createStore } from "redux";
import todoAction from "../modules/todos";

const rootReducer = combineReducers({
  todoAction,
});
const store = createStore(rootReducer);

export default store;
