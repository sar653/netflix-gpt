import { configureStore } from "@reduxjs/toolkit";
import userReducer from"../utils/userSlice"
import movieReducer from "../utils/movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice";


const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer
    }
    

})
export default appStore