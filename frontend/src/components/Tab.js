import * as PropTypes from "prop-types";
import './Tab.css';
import { useState } from 'react';
function TabHeader({header,index,changeTab,active}) {

    let className ="tab-header";
    if(active)
    {
        className +=" active";
    }
    return (<span className={className}
                  onClick={()=>changeTab(index)}>
            {header}
            </span>
       );
}

TabHeader.propTypes = {header: PropTypes.any};
export default function Tab({headers,children})
{
    const [activeTab,setActiveTab] = useState(0);
    const changeTab=(tabIndex)=>{
        console.log('Set Active Tab ',tabIndex);
        setActiveTab(tabIndex);
    }
    return (<div className={'tab-container'}>
        <div className={'header-container'}>
        {headers.map((header,index)=><TabHeader
            key={index}
            index={index}
            active={activeTab==index}
            changeTab={changeTab}
            header={header}/>)}
        </div>
        <div className={'tab-body'}>
            {children[activeTab]}
        </div>
    </div>);
}