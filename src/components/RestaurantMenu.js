import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () =>{

    const [resInfo,setResInfo] = useState([]);
    const {resId} = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async()=>{
        const data = await fetch(MENU_URL + resId );
        const json = await data.json();
        console.log(json) ;
        setResInfo(json);
    }
    console.log(resInfo?.data?.cards); 
    if(resInfo === null) return <Shimmer/>
    return (
    <div className="menu">
        <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
        <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")} - {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.avgRating
        }</h3>
        <h1>menu</h1>
        <ul>
        <li >
            {resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards.map((item=>
            <li key ={resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards[1]?.card?.info?.id}>
                {item.card.info.name} - {"Rs"} -  {item.card.info.price/100 || item.card.info.defUltPrice/100}</li>))}
                </li>
        </ul>
    </div>
    )
}
export  default RestaurantMenu ;