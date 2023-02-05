function HomeComponent() {
    return <div>
        <h1>Home</h1>
    </div>;
}

function LogIn() {
    return <div>
        <h1>Log In</h1>
    </div>;
}

export default function ()
{
    let loggedIn = false;
    /*

    return (<div>
        {
            loggedIn? <h1>Home</h1>: <h1>Login</h1>
        }
    </div>);
    */
    let page;
    /* if(loggedIn)
     {
         page = <HomeComponent/>;
     }
     else
     {
         page = <LogIn/>
     }
     return page;*/
    return loggedIn?<HomeComponent/>: <LogIn/>;
}