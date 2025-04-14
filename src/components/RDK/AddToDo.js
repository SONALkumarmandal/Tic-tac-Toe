import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos:{
        
    }
}
const AddToDoSlice= createSlice({
    name:'toDoAdd',
    initialState,
    reducers:{
        toDoAddition(state,action){
            const newTodo = action.payload;
            state.todos = {
              ...state.todos,
              [newTodo.id]: newTodo
            };
        },
        deleteToDo(state,action){
            delete state.todos[action.payload];
        }
    }
})

export const {toDoAddition,deleteToDo} = AddToDoSlice.actions
export default AddToDoSlice.reducer