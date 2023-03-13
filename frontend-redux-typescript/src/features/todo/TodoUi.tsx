import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {addTodo, deleteTodo, loadAllToDo, selectTodo, Todo, updateTodo} from "./todoSlice";
import "./Todo.css";
import {useEffect, useState} from "react";
function TodoItem(props: { todo: Todo }) {
    const dispatch = useAppDispatch();


    const [edit,setEdit] = useState(false);
    const [editTitle,setEditTitle] = useState(props.todo.title);
    const btnEditHandler = ()=>{
        if(!edit)
        {
            setEdit(true);
        }
        else //Update action
        {
            console.log('Update action');
            let payload:Todo = {...props.todo,title:editTitle};
            dispatch(updateTodo(payload));
            setEdit(false);
        }
    };
    const btnDeleteHandler = ()=>{
      dispatch(deleteTodo(props.todo));
    };

    return <div className={"todo-item"}>
        { !edit && props.todo.title}
        {edit && <input type={"text"}
                        value={editTitle}
                        onChange={(event => setEditTitle(event.target.value))}/> }
        <button
            type={"button"}
            className={"btn btn-primary"}
            onClick={btnEditHandler}
           >
            {!edit?'Edit':'Update'}
        </button>
        &nbsp;
        <button
            type={"button"}
            className={"btn btn-primary"}
            onClick={btnDeleteHandler}>
            Delete
        </button>
    </div>;
}
interface Values {
    title: string;
}
let id = 1;
function getId()
{
    return ++id;
}
export default function TodoUi()
{
    const todos = useAppSelector(selectTodo);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        console.log('Use effect triggered');
        dispatch(loadAllToDo());
    },[]);
    const addToDoHandler = (todo:any)=>{
        let id = getId();
        let todoModel:Todo = {
            id : id,
            title:todo.title,
        };
        dispatch(addTodo(todoModel));
    };
    return (<div>
        <Formik
            initialValues={{
                title: '',

            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
               console.log('Values ',values);
                addToDoHandler(values);
                values.title = '';
            }}
        >
            <Form>
                <label htmlFor="title">Title</label>
                <Field
                    id="title"
                    name="title"
                    placeholder="Task to do"
                    className={"form-control"}/>

                <button type="submit" className={"btn btn-primary"}>Add</button>
            </Form>
        </Formik>
        {
            todos.items.map((todo:Todo)=>{
                return <TodoItem key={todo.id} todo={todo}/>
            })
        }
    </div>);
}