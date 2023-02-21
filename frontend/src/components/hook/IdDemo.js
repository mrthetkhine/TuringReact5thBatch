import { useId } from 'react';
export default function IdDemo()
{
    const passwordHintId = useId();
    return (<div>
        <label>
            Password:
            <input
                type="password"
                aria-describedby={passwordHintId}
            />
        </label>
        <p id={passwordHintId}>
            The password should contain at least 18 characters
        </p>
    </div>)
}