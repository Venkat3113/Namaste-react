import react from 'react';

class UserClass extends react.Component {
    constructor(props){
        super(props);

        this.state={
           userInfo:{
            name    : "Dummy Name",
            location: "Dummy Location",
           },
        };
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/Venkat3113");
        const json = await data.json();
        
        this.setState({
                userInfo: json,
                        
        }); 


    }

    render(){
        const{name, location, email, avatar_url} = this.state.userInfo;
        return(
         
            
            <div className = "bg-green-300 border border-solid  border-black rounded-lg  p-1">
            <img src       = {avatar_url} />
            <h2>Name    : {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact : {email}</h4>
            
        </div>
            
       
        )
    }
}

export default UserClass;