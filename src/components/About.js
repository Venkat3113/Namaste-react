import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div className="about">
            <h1>About Us</h1>
            <p>This is Namaste - React web series - About us page </p>
            <User name={"Venkat(Function)"} location="vizianagaram" gmail="psvenkat3119@gmail.com"/>
            <UserClass name={"Venkat(class)"} location="vizianagaram" gmail="psvenkat3119@gmail.com" />
        </div>
    )

}

export default About;
