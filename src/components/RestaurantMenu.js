import Shimmer from "./Shimmer"; 
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
    
const { resId } = useParams();

const { resinfo } = useRestaurantMenu(resId);

   


   
if (resinfo === null) { return <Shimmer />; }

const { name, costForTwoMessage, cuisines } = resinfo?.cards[2]?.card?.card?.info;

const { itemCards } = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories?.[0] || resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
     c => c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     )




return (
        <div className = "p-4 flex flex-col items-center">
            <h1 className="font-bold text-3xl my-4">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <div className="w-6/12 m-4 p-4 ">

            <div className="h-4  mb-6 bg-amber-500 border  shadow-3xl" ></div>

            {categories.map((category) => {
            const c= category.card.card; 
            return c["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ?(
            <div className="flex flex-col mt-6 mb-3 p-0" key={category.card.card.categoryId }>
           
            
            <div className="font-bold text-3xl bg-gray-50 mb-10 pl-4"  >  {c.title} </div>
             {c.categories?.map((subCategory, index) => (
        <RestaurantCategory
          key={subCategory.categoryId || index}
          data={subCategory}
          className="m-1"
        /> ))}
        <div className="h-4  mb-6 bg-gray-200 border  shadow-3xl" ></div>
            </div>
            )
            :(
        
            <RestaurantCategory key={category.card.card.categoryId} data = {category.card.card} className="m-1" />
            
            );} )}



            </div>
        </div>
    );
};

export default RestaurantMenu;
