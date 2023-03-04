import withLoader from "./withLoader";
import withHover from "./withHover";
import {useEffect} from "react";
import useHover from "./useHover";

function DogImages(props) {
    return (
        <div {...props}>
            {props.hovering && <div id="hover">Hovering!</div>}
            <div id="list">
                {props.data.message.map((dog, index) => (
                    <img src={dog} alt="Dog" key={index} />
                ))}
            </div>
        </div>
    );
}
function Simple(props)
{
    const [hoverRef, hovering] = useHover();
    return (<div  ref={hoverRef} {...props}>
        {hovering && <h1 id="hover">Hovering!</h1>}
        Simple Component
    </div>);
}
export default function HocDemo()
{
    let DogImagesWithLoader = withHover(withLoader(DogImages,
        "https://dog.ceo/api/breed/labrador/images/random/6"
    ));

    return (<div>
        <Simple/>
        <DogImagesWithLoader/>
    </div>);

}