import React,{lazy,Suspense, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/UserContext";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import( "./components/Grocery"))
const AppLayout = () =>{
    const [userName,setUserName] = useState()

    useEffect(()=>{
        const data={
            name:"RAGHAVENDRA SAGAR UPPAR"
        }
        setUserName(data.name)
    },[])

    return(
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
     
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading..........</h1>} ><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>,
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);