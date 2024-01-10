import { combineReducers } from "redux";
import userReducer from "./user/slice";
import playlistReducer from "./playlist/slice";
import musicReducer from "./music/slice";
import sectionReducer from "./section/slice";
import categoryReducer from "./category/slice";

const rootReducer = combineReducers({
  userReducer,
  musicReducer,
  playlistReducer,
  sectionReducer,
  categoryReducer,
});

export default rootReducer;
