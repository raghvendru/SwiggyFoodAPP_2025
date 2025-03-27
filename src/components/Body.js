import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

   

    useEffect(()=>{
        fetchData();
    },[]
    )
    const fetchData = async()=>{
        // const data  = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 

        const json = await data.json();
        console.log(json);
        console.log(json.data.cards);

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return (<h1>Looks like you are offline !!Please check your internate connection</h1>);

    return (!listOfRestaurants || listOfRestaurants.length === 0) ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search  m-4 p-4">
                <input type="text" className="search-box  border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button className="px-4 py-2 m-4 rounded-xl bg-green-200" onClick={()=>{
                    const filtered = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filtered)
                }}>Search</button>
                </div>
               <div className="search m-4 p-4 flex items-center">
               <button className="px-4 py-2 bg-gray-100 rounded-xl" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.avgRating>4
                )
                setListOfRestaurant(filteredList);
                    console.log("button clicked")}}
                    >
                    Top Restaurant Button</button>
               </div>
            </div>
            <div className="res-container flex flex-wrap ">  
                 {
                filteredRestaurant.map((restaurant) =>( <Link key=
                    {restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard resdata={restaurant} /> </Link>))
               }
               
            </div>
        </div>
    )

}

export default Body;