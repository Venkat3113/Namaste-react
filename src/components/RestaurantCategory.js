import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({data}) =>{

    const[showItems, setShowItems] = useState(false);

    const handleClick = () => {
            setShowItems(!showItems);
    };

        return <div className="bg-gray-50 mb-4 shadow-lg pr-4 pt-2 cursor-pointer">
            <div className="flex justify-between " onClick={handleClick}>
            <span className="font-bold text-lg pl-4 h-18 ">{data.title}({data.itemCards.length}) </span>
            <span>⬇️</span>
            </div>
            { showItems && <ItemList items={data.itemCards}/> }
        </div>
        

}

export default RestaurantCategory;