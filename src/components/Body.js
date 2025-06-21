import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for food items" />
                <button className="search-btn">Search</button>
            </div>
            <div className="res-container">
                { resList.map((restaurant) => (
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