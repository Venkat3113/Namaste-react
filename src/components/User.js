const User = (props) => {
    const { name, location, gmail } = props;
    return (
        <div className = "user-card">
            <h2>Name    : {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact : {gmail}</h4>
            
        </div>
    )
}
 
export default User;