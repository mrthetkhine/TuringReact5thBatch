import {useLayoutEffect, useRef} from "react";

const list = ["apple",
                "orange",
            "banana"
]
export default function LayoutEffectDemo()
{
    const ref = useRef(null);
    useLayoutEffect(()=>{
        const { height } = ref.current.getBoundingClientRect();
        console.log('Height is ',height);
    },[]);
    console.log('Render');
    return (<div>
        LayoutEffectDemo
        <div ref={ref}>
            {
                list.map((item,index)=>{
                    return (<div key={index}>{item}</div>);
                })
            }
        </div>
    </div>);
}