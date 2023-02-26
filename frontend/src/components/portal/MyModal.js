import * as ReactDOM from "react-dom";
import "./MyModal.css"
import {useEffect, useState} from "react";
function ModalBody({open,close,children})
{
    console.log('ModalBody ',open);
    const btnCloseHandler= ()=>{
        console.log('Close Btn');
        close();
    };
    return (<div className="our-modal">
        <div className={'our-modal-body'}>
            {children}
        </div>
    </div>);
}
function Modal({show,open,close,children})
{
    console.log('Modal open prop ',show);
    console.log('Modal children ',children);
    return (<div>
        {
            show ===true?
                <ModalBody open={show}
                           children={children}
                           close={close}/>
                :null
        }
    </div>);
}
export default function MyModal({show,open,close,children})
{

    console.log('Modal open ',show);
    console.log('MyModal children ',children);
    if(show)
    {
        return ReactDOM.createPortal(
            <Modal show={show}
                    open={open}
                    close={close}
                    children={children}/>,
            document.body
        );
    }
    else {
        return null;
    }

}