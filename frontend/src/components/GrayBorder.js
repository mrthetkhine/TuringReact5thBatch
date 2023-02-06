import './GrayBorder.css';
export default function GrayBorder({children})
{
    console.log("Props ",children[0]);
    return (<div className={'gray-border'} >
        {children}
    </div>)
}