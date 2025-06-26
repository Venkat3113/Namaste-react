import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{


     const onlineStatus = useOnlineStatus();


      // State variable - super powerful variable
     const [listOfRestaurants, setListOfRestaurants] = useState([]);
     
     const [searchText, setSearchText] = useState("");

     const[filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.1066576&lng=83.39555059999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null    ");
    const json = await data.json();

      // Filter cards that are restaurants and have info
    const restaurantCards = json.data.cards.filter(
        (card) => 
            card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant" &&
            card.card.card.info
    );

    setListOfRestaurants(restaurantCards);
    setFilteredListOfRestaurants(restaurantCards);
    console.log(filteredListOfRestaurants);
                                    };
    
         if (onlineStatus === false) {
        return (
            <h1 className = "offline-status">
                You are not connected to the internet. Please check your connection.
            </h1>
        );
    }
   

      // conditional rendering
    return listOfRestaurants.length === 0 ?
        ( 
            <Shimmer />
        ):

        
    
        (
        <div className = "body">
            

            <div className = "flex items-center">

                <div className = "m-4 p-4">
                <input 
                    type        = "text"
                    placeholder = "Search for food items"
                    className   = "border border-solid border-1 border-black rounded-lg  p-1"
                    value       = {searchText}
                    onChange    = {(e) => 
                        setSearchText(e.target.value)}
                    />
                <button 
                className = "px-3 py-1 bg-amber-600 text-white rounded-lg m-4"
                onClick   = {()=>{
                    
                   
                    const filteredRestaurant = listOfRestaurants.filter(
                        (restaurant) => 
                            restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setFilteredListOfRestaurants(filteredRestaurant);

                }}  
                >Search
                </button>
            </div>
             
                    <button 
                    className = "px-3 py-1 bg-amber-600 text-white rounded-lg m-4"
                    onClick   = {() => {

                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.card.card.info.avgRating > 4
                        );
                        setFilteredListOfRestaurants(filteredList);

                    }}
                    >
                    Top rated restaurants
                    </button>
            </div>
            <div className = "flex flex-wrap ">
                { filteredListOfRestaurants.map((restaurant) => (
                    <Link to = {"/restaurants/" + restaurant.card.card.info.id} key = {restaurant.card.card.info.id}>
                        <RestaurantCard 
                            resData = { restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};



export default Body;