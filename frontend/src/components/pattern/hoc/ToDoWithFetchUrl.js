import useFetchUrl from "./useFetchUrl";

export default function ToDoWithFetchUrl()
{
    const [loading,data] = useFetchUrl('https://jsonplaceholder.typicode.com/todos/');
    return (<div>
        ToDoWithFetchUrl
        {
            loading?<h1>loading</h1>:null
        }
        {
            data.map((todo)=>{
                return (<div key={todo.id}>
                    {todo.title}
                </div>);
            })
        }
    </div>);
};