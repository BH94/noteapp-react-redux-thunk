import { combineReducers } from "redux";
import note from "./note";
import weather from "./weather";

export default combineReducers({
  note,
  weather,
});
