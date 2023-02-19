import {useRef, useState} from "react";

export default function StopWatch()
{
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    function handleStart() {
        // Start counting.
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            // Update the current time every 10ms.
            setNow(Date.now());
        }, 500);
    }
    function handleStop() {
        clearInterval(intervalRef.current);
    }
    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }
    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart} className={"btn btn-primary"}>
                Start
            </button>
            <button onClick={handleStop} className={"btn btn-primary"}>
                Stop
            </button>
        </>
    );
}