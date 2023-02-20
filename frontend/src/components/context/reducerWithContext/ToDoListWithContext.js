import {useContext, useEffect, useReducer, useState} from "react";
import {ToDoItemsContext,ToDoDispatchContext} from "./ToDoContext";
import {v4 as uuidv4} from "uuid";

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
        case 'LOAD_TO_DO':
            return action.payload;
        case 'ADD_TO_DO':
            return [...state,action.payload];
        case 'DELETE_TO_DO':
            return state.filter(todo=>todo.id != action.payload.id)
        case 'UPDATE_TO_DO':
            return state.map(todo=>todo.id === action.payload.id? action.payload : todo)
    }
    return state;
}
function ToDoItem({todo}) {

    const dispatch = useContext(ToDoDispatchContext);
    const [editMode,setEditMode] = useState(false);
    const [todoTitle,setToDoTitle] = useState(todo.title)
    const editClickHandler =()=>
    {
        if(editMode)
        {
            let itemToUpdate={
                id : todo.id,
                title : todoTitle
            };
            console.log('Item to update ',itemToUpdate);
            dispatch({
                type:'UPDATE_TO_DO',
                payload:itemToUpdate
            });
        }
        setEditMode(!editMode);
    }
    const onDeleteHandler = ()=>{
        console.log('On Delete Handler ',todo);
        dispatch({
            type:'DELETE_TO_DO',
            payload:todo
        });
    };
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
                onClick={onDeleteHandler}
        >Delete</button>

    </div>;
}
function ToDoEntry()
{
    const dispatch = useContext(ToDoDispatchContext);
    const [newToDoItem,setNewToDoItem] = useState('');
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
    }
    return (<div>
        <input type={"text"}
               value={newToDoItem}
               onChange={(event)=>setNewToDoItem(event.target.value)}
        />
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={addToDoHandler}
        >Add</button>
    </div>);
}
function ToDoList()
{
    const todos = useContext(ToDoItemsContext);
    return (<div>
        <ToDoEntry/>
        {
            todos.map( todo=> <ToDoItem key={todo.id}
                                        todo={todo}
            />)
        }
    </div>)

}
function ToDoCounter()
{
    const todos = useContext(ToDoItemsContext);
    return (<div>
        <h1> Total todo count {todos.length}</h1>
    </div>);
}
export default function ToDoListWithContext()
{
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        console.log('Fetch from API');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type:'LOAD_TO_DO',
                    payload:json
                });
            });
    },[]);
    return (<div>
        To Do List with Context
        <ToDoItemsContext.Provider value={state}>
            <ToDoDispatchContext.Provider value={dispatch}>
                <ToDoList/>
                <ToDoCounter/>
            </ToDoDispatchContext.Provider>
        </ToDoItemsContext.Provider>
    </div>);
}