import * as PropTypes from "prop-types";

function ToDo({todo}) {
    let btnClickHandler = ()=>{
        console.log('Btn Click ',todo);
    };
    return <div>
        {todo.title}
        <button className={"btn btn-primary"}
                onClick={btnClickHandler}
        > Click Me</button>
    </div>;
}

ToDo.propTypes = {todo: PropTypes.any};
export default function ListDemo()
{
    let todos = [
        {
            id:1,
            title : 'Todo 1',
        },
        {
            id:2,
            title : 'Todo 2',
        },
    ];
    return(<div>
        To Do List
        {
            todos.map(todo=>
                        <ToDo key={todo.id}
                              todo={todo}/>)
        }
    </div>)
}