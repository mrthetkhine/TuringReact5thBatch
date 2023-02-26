import {useState} from "react";
import MyModal from "./MyModal";

export default function MyModalDemo()
{
    const [showModal,setShowModal] = useState(false);
    const open = ()=>{
        setShowModal(true);
    }
    const close =()=>{
        setShowModal(false);
    }
    return (<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={open}>Show</button>
        <MyModal show={showModal}
                 open={open}
                 close={close}
        >
            <div>
                <p>Modal Body</p>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={close}>
                    Close supplied
                </button>
            </div>

        </MyModal>
    </div>);
}