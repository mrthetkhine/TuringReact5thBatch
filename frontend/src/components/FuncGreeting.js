const PropTypes = require("prop-types");

function FuncGreeting({message})
{
    return (<div>
        Greeting
        <h1>{message}</h1>
    </div>);
}
FuncGreeting.propTypes = {
    message: PropTypes.string.isRequired
}
export default FuncGreeting;
