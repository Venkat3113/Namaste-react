import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resinfo, setResInfo] = useState(null);
    
    useEffect( ()=>{
        fetchMenu();
             }, []);


const fetchMenu = async () => {
  const data = await fetch("https://thingproxy.freeboard.io/fetch/" + MENU_API_URL + resId);
  const json = await data.json();
  console.log(json); 
  setResInfo(json.data);
};

return { resinfo };

}

export default useRestaurantMenu;