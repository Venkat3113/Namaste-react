import { useState, useEffect } from "react";   
import Shimmer from "./Shimmer"; 
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";


const RestaurantMenu = () => {
    const [resinfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);

   useEffect( ()=>{
        fetchMenu();
   }, []);




const fetchMenu = async () => {
  const data = await fetch("https://thingproxy.freeboard.io/fetch/" + MENU_API_URL + resId);
  const json = await data.json();
  console.log(json); 
  setResInfo(json.data);
};


   
    if (resinfo === null) {
  return <Shimmer />;
}

const { name, costForTwoMessage, cuisines } = resinfo?.cards[2]?.card?.card?.info;

const { itemCards } = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories?.[0] || resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards);


    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs{item?.card?.info?.price / 100}</li>
                ))} 
            </ul>

            </div>
    );
};

export default RestaurantMenu;
