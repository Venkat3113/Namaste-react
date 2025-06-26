import Shimmer from "./Shimmer"; 
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const { resinfo } = useRestaurantMenu(resId);

   


   
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
