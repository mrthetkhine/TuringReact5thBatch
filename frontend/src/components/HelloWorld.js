import ClassComponent from "./ClassComponent";
import './HelloWorld.css';
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};
function HelloWorld()
{
    let styleObj = {
        width: user.imageSize,
        height: user.imageSize
    };
    return(
        <div>
            <h1> Hello World</h1>
            <h2> How are you
                {user.name.toUpperCase()}
            </h2>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={styleObj}
            />
        </div>
    );
}
export default HelloWorld;