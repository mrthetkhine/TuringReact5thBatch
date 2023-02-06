import './PageComponent.css';
export function Profile(props)
{
    return (<div>
        <img
            className={"avatar"}
            src={props.image}
            alt="Katherine Johnson"
        />
    </div>);
}
export function Header({profile})
{
    //let profile = props.profile;
    return(<div>
        <h1> {profile.title}</h1>
        <Profile image={profile.image}/>
    </div>);
}
export function Body()
{
    return(<div>
        <h1> Body</h1>
    </div>);
}
export function Footer({message='Footer'})
{
    return(<div>
        <h1> {message}</h1>
    </div>);
}
export default function PageComponent()
{
    let profile = {
        name : 'Katherine Johnson',
        image : 'https://i.imgur.com/MK3eW3As.jpg'
    };
    return (<div>
                <Header profile={profile}/>
                <Body/>
                <Footer message={'Some footer displayed at bottom'}/>
                <br/>
        </div>);
}