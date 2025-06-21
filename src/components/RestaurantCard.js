import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    // console.log(resData);
    const {  cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData.card.card.info;

    return(
        <div className="res-card">
            <img
            className="res-logo" 
            alt="restaurant-logo"  
            src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} minutes</h4>
        </div>
    )
}

export default RestaurantCard;