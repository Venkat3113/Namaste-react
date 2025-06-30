import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
      // console.log(resData);
    const {  cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData.card.card.info;

    return(
        <div className = "m-4 p-4 w-64 h-[400px] bg-gray-100 shadow-lg rounded-lg hover:bg-gray-200">
            <img
            className = "rounded-lg h-40 w-64 object-cover"
            alt       = "restaurant-logo"
            src       = {CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-2 " >{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} minutes</h4>
        </div>
    )
}


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div >
                <label className="absolute  bg-black text-white m-1 p-1 rounded">
                    Promoted
                    </label>
                <RestaurantCard {...props} />

               
            </div>
        );
    };
};

export default RestaurantCard;