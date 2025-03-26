import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
  const [btnName,setBtnName]  =useState(["login"]);

  console.log("header rendering/....")
    return(
        <div className = "header">
            <div className="logo-container">
                <img className="logo"
                src ={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact" >Contact Us</Link></li>
                    <li>Cart</li>
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