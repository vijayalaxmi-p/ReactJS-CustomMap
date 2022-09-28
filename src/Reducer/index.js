import { combineReducers } from "redux";
import { getPosts } from "./mapReducer";

export default combineReducers(
    {
     
        post: getPosts,
    }
)