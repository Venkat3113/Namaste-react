import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{

    const[btnNameReact, setBtnNameReact] = useState("Login");

    // useEffect is a hook that runs after the component renders
    // if no dependencies(no array) are passed, it runs after every render
    // if an empty array is passed, it runs only once after the first render
    // if an array with dependencies is passed, it runs after the first render and whenever the dependencies change(whenever btnNameReact changes in this case)

    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);
    
    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
           </div>
           <div className="nav-items">
                <ul>
                    <li>  Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;