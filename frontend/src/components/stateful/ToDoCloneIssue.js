import {useState} from "react";
import { useImmer } from 'use-immer';
export default function ToDoCloneIssue()
{
    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    const [todo, setTodo] = useState({
        title:'Task1 ',
        completed:false
    });
    console.log('Re render counter two');
    return (
        <>
            <h1>Artwork city {person.artwork.city}</h1>
            <h1>{todo.title}</h1>
            <h1>Completed {todo.completed+''}</h1>
            <button onClick={() => {

               setTodo({ ...todo, completed: true});
               updatePerson(person=>{
                  person.artwork.city = 'Yangon';
               });
            }}>Update Completed</button>
        </>
    )
}