import {useEffect, useState} from "react";

export default function useFetchUrl(url)
{
    const [state,setState] = useState({
        loading:true,
        data: []
    })
    useEffect(()=>{
        setState({loading:true,data:[]});

        fetch(url)
            .then(response=>response.json())
            .then(json=>{
                setState({
                    loading:false,
                    data : json
                })
            })

    },[url]);
    return [state.loading,state.data];
}