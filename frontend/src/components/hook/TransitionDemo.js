import {useState,useTransition} from "react";
import {fakeNames} from "./fakeName";
import './Transition.css';
export function FilterList({ names }) {
    const [query, setQuery] = useState("");
    const [highlight, setHighlight] = useState('');
    const [isPending, startTransition] = useTransition();
    const changeHandler = ({ target: { value } }) => {
        setQuery(value);
        startTransition(() => setHighlight(value));
    };


    return (
        <div>
            <input onChange={changeHandler}
                   value={query}
                   type="text" />
            {names.map((name, i) => (
                <ListItem key={i} name={name}
                          highlight={query} />
            ))}
        </div>
    );
}

function ListItem({ name, highlight }) {
    const index = name.toLowerCase().indexOf(highlight.toLowerCase());
    if (index === -1) {
        return <div>{name}</div>;
    }
    return (
        <div>
            {name.slice(0, index)}
            <span className="highlight">
        {name.slice(index, index + highlight.length)}
      </span>
            {name.slice(index + highlight.length)}
        </div>
    );
}
export default function TransitionDemo()
{
    return <FilterList names={fakeNames} />;
}