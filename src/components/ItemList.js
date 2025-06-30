import {CDN_URL} from "../utils/constants";

const ItemList = ({items}) =>{
    console.log(items);
    return (<div>
        {items.map((item) => {
           return( <div key={item.card.info.id} className="bg-gray-50 mb-4 pl-2 pr-4  border-gray-300 border-b-2 flex justify-between items-center gap-20">
                <div>
                <span className="text-lg pb-4 ">{item.card.info.name}</span>
                <span className=""> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                
                <p className="text-xs mb-3 mt-6">{item.card.info.description}</p>
                </div>
                <div className="w-36 min-w-[9rem]">
                    <button className="bg-amber-600 text-white rounded-lg px-2 py-1 absolute">Add +</button>
                    <img src={CDN_URL + item.card.info.imageId} className="w-full h-32 object-cover rounded-2xl p-2 " />
                </div>

            </div>);
        })}

    </div>)
}

export default ItemList;