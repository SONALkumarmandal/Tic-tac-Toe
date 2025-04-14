import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./AddToDo";

const store = configureStore({
    reducer:{
        toDoAdd :  toDoReducer,
    }
})

export default store