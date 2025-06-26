import react from 'react';

class UserClass extends react.Component {
    constructor(props){
        super(props);
    }

    render(){
        const{name, location, gmail} = this.props;
        return(
         
            

            <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : {gmail}</h4>    
            
        </div>
            
       
        )
    }
}

export default UserClass;