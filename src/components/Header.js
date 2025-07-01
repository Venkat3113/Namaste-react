import { LOGO_URL } from "../utils/constants";
import { useState, useContext, use  } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

    const[btnNameReact, setBtnNameReact] = useState("Login");

      // useEffect is a hook that runs after the component renders
      // if no dependencies(no array) are passed, it runs after every render
      // if an empty array is passed, it runs only once after the first render
      // if an array with dependencies is passed, it runs after the first render and whenever the dependencies change(whenever btnNameReact changes in this case)


    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store)=>store.cart.items);

    return(
        <div className = "flex justify-between items-center bg-pink-100 shadow-lg p-4 m-2">
        <div className = "logo-container">
        <img className = "w-34" src = {LOGO_URL} />
           </div>
           <div className = "nav-items">
                <ul className="flex items-center justify-between p-4 m-4">
                    <li className="px-4"> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to = "/">Home</Link></li>
                    <li className="px-4"><Link to = "/about">About us</Link></li>
                    <li className="px-4"><Link to = "/contact">Contact us</Link></li>
                    <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold cursor-pointer">
                        <Link to = "/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button className = "cursor-pointer"
                            onClick   = {() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}
                    >
                        {btnNameReact}
                    </button>
                     <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;