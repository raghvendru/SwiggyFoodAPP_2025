import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer/>

    const catagories = 
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.
    ["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
        <p className="font-bold text-lg">
            {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")} - {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>

        {catagories.map((category,index) =>
        //controlled component
             (<RestaurantCategory key={category.card.card.title} data ={category?.card?.card} 
             showItems={index===showIndex ? true : false} 
             setShowIndex= {()=>setShowIndex(index)}/>))}

    </div>
    )
}
export  default RestaurantMenu ;