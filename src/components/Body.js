import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () =>{

    // State variable - super powerful variable
     const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    // const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await data.json();

    // Filter cards that are restaurants and have info
    const restaurantCards = json.data.cards.filter(
        (card) =>
            card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant" &&
            card.card.card.info
    );

    setListOfRestaurants(restaurantCards);
};


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