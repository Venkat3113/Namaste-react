import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

    // State variable - super powerful variable
     const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    // const [searchText, setSearchText] = useState("");
    



    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for food items" />
                <button className="search-btn">Search</button>
            </div>

            <div className="filter">
                    <button 
                    className="filter-btn"
                    onClick={() => {

                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.card.card.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);

                    }}
                    >
                    Top rated restaurants
                    </button>
            </div>
            <div className="res-container">
                { listOfRestaurants.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.card.card.info.id} 
                        resData={ restaurant} 
                        />
                        ))}
            </div>
        </div>
    );
};



export default Body;