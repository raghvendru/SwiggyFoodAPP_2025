import { CDN_URL  } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resdata} = props;
    // const {deliveryTime} = resdata.info.sla;
    return(
        <div className="p-4 m-4 w-[300px] rounded-lg bg-gray-200  hover:bg-pink-200" >
            <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL 
              + resdata.info.cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{resdata.info.name}</h3>
      <h4>{resdata.info.cuisines.join(", ")}</h4>
      <h4>⭐ {resdata.info.avgRating}</h4>
      <h4>⏳ {resdata.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}


export default RestaurantCard;