import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';
export default function ExternalStore()
{
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    return (
        <>
            <button onClick={() => todosStore.addTodo()}>Add todo</button>
            <hr />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}