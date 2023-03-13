import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {counterSlice, incrementAsync} from "../counter/counterSlice";
import {fetchCount} from "../counter/counterAPI";
import {apiLoadAllTodo} from "./todoAPI";

export interface Todo
{
    "userId"?:string,
    "id"?: number,
    "title": string,
    "completed"?: boolean
}
export interface ToDoState
{
    items: Array<Todo>;
}
const initialState : ToDoState = {
    items : [ {
        userId : '1',
        id : 1,
        title : "First to do",
        completed:true
    }]
}
export const loadAllToDo = createAsyncThunk(
    'todo/loadAllToDo',
    async () => {
        const response = await apiLoadAllTodo();
        let json = response.json();
        console.log('JSON from API ',json);
        return json;
    }
);

export const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
            addTodo:(state,action:PayloadAction<Todo>)=>
            {
                state.items = [...state.items,action.payload];
            },
            deleteTodo:(state,action:PayloadAction<Todo>)=>
            {
                state.items = state.items.filter((todo:Todo)=>todo.id!== action.payload.id);
            },
            updateTodo:(state,action:PayloadAction<Todo>)=>{
                state.items = state.items.map(
                    (todo:Todo)=> todo.id === action.payload.id?action.payload:todo
                );
            },
        },
    extraReducers: (builder) => {
        builder
            .addCase(loadAllToDo.pending, (state) => {
                console.log('Load all todo pending');
            })
            .addCase(loadAllToDo.fulfilled, (state,action) => {
                console.log('loadAllToDo.fulfilled ',action);
                state.items = action.payload;
            })

    },
});
export const { addTodo,deleteTodo,updateTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo;
export default todoSlice.reducer;