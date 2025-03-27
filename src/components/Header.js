import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
  const [btnName,setBtnName]  =useState(["login"]);
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=>store.cart.items);


    return(
        <div className = "flex justify-between bg-pink-100 shadow-xl sm:bg-yellow-100 lg:bg-green-100">
            <div className="w-56 flex items-center">
                <img className="logo"
                src ={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" :"🔴" }</li>
                    <li className="px-4"><Link to="/"> Home</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact" >Contact Us</Link></li>
                    <li className="px-4  to-blue-100 font-bold text-lg" ><Link to="/cart">🛒 ({cartItems.length} items)</Link></li>
                    <button className="btn" onClick={()=>{
                      (btnName==="login") ?  setBtnName("logout") :setBtnName("login");
                    }
                }>{btnName}</button>
                 <li className="px-4">{loggedInUser}</li>

                </ul>

            </div>
        </div>
    )
}

export default Header;