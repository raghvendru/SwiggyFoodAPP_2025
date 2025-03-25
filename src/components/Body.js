import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]
    )
    const fetchData = async()=>{
        const data  = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards);

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // if(!listOfRestaurants || listOfRestaurants.length === 0){
    //     return <Shimmer/>;  
        
    // }
    return (!listOfRestaurants || listOfRestaurants.length === 0) ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button onClick={()=>{
                    const filtered = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filtered)
                }}>Search</button>

                </div>
                
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.avgRating>4
                )
                setListOfRestaurant(filteredList);
                    console.log("button clicked")}}
                    >
                    Top Restaurant Button</button>
            </div>
            <div className="res-container">
               {
                filteredRestaurant.map((restaurant) =>( <RestaurantCard key=
                    {restaurant.info.id} resdata={restaurant} />))
               }
            </div>
        </div>
    )

}

export default Body;