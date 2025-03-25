import { CDN_URL  } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resdata} = props;
    // const {deliveryTime} = resdata.info.sla;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
            <img className="res-logo" alt="res-logo" src={CDN_URL 
              + resdata.info.cloudinaryImageId}/>
            <h3>{resdata.info.name}</h3>
      <h4>{resdata.info.cuisines.join(", ")}</h4>
      <h4>⭐ {resdata.info.avgRating}</h4>
      <h4>⏳ {resdata.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}


export default RestaurantCard;