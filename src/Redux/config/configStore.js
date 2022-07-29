import { combineReducers, createStore } from "redux";
import counter from "../modules/counter";
import todoAction from "../modules/todos";

const rootReducer = combineReducers({
  counter,
  todoAction,
});
const store = createStore(rootReducer);

export default store;
