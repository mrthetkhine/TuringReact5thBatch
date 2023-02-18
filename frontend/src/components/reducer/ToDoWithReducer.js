import {useReducer, useState} from "react";
import * as PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
const initialState = [
    {
        id:1,
        title : 'Task 1',
    },
    {
        id:2,
        title : 'Task 2',
    }
];
function reducer(state,action)
{
    switch (action.type)
    {
        case 'ADD_TO_DO':
            return [...state,action.payload];
        case 'DELETE_TO_DO':
            return state.filter(todo=>todo.id != action.payload.id)
        case 'UPDATE_TO_DO':
            return state.map(todo=>todo.id === action.payload.id? action.payload : todo)
    }
    return state;
}

function ToDoItem({todo,deleteTodo,updateTodo}) {

    const [editMode,setEditMode] = useState(false);
    const [todoTitle,setToDoTitle] = useState(todo.title)
    const editClickHandler =()=>
    {
        if(editMode)
        {
            updateTodo({
                id : todo.id,
                title : todoTitle
            })
        }
        setEditMode(!editMode);
    }
    return <div>
        {!editMode &&<span >
            {todo.title}
        </span> }   &nbsp;
        {editMode &&
        <input type={"text"}
                value={todoTitle}
                onChange={(event)=> setToDoTitle(event.target.value)}/>
            }
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={editClickHandler}
        >{editMode==false?'Edit':'Update'}</button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>deleteTodo(todo)}
        >Delete</button>

    </div>;
}

ToDoItem.propTypes = {todo: PropTypes.any};
export default function ToDoWithReducer()
{
    const [newToDoItem,setNewToDoItem] = useState('');
    const [state,dispatch] = useReducer(reducer,initialState);
    const addToDoHandler = ()=>{
        let todoItem = {
            id : uuidv4(),
            title : newToDoItem
        }
        dispatch({
           type : 'ADD_TO_DO',
            payload: todoItem
        });
        setNewToDoItem('');
    };
    const deleteToDoHandler = (todoItem)=>{
        dispatch({
            type : 'DELETE_TO_DO',
            payload: todoItem
        });
    };
    const updateToDoHandler = (todoItem)=>{

        dispatch({
            type : 'UPDATE_TO_DO',
            payload: todoItem
        });
    };

    return (<div>

        <div>
            <input type={"text"}
                   value={newToDoItem}
                   onChange={(event)=>setNewToDoItem(event.target.value)}
            />
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={addToDoHandler}
            >Add</button>

        </div>
        {
            state.map( todo=> <ToDoItem key={todo.id}
                                        todo={todo}
                                        deleteTodo={deleteToDoHandler}
                                        updateTodo={updateToDoHandler}/>)
        }
    </div>)
}