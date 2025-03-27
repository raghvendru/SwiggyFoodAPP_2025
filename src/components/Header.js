import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
  const [btnName,setBtnName]  =useState(["login"]);
  const onlineStatus = useOnlineStatus();

  console.log("header rendering/....")
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
                    <li className="px-4">Cart</li>
                    <button className="btn" onClick={()=>{
                      (btnName==="login") ?  setBtnName("logout") :setBtnName("login");
                        console.log(btnName);
                    }
                }>{btnName}</button>
                </ul>

            </div>
        </div>
    )
}

export default Header;