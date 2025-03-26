import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"dummy",
                location:"default",
                avatar_url:"https://www.google.com/imgres?q=dummy%20photo%20male&imgurl=https%3A%2F%2Fvkrvrao.du.ac.in%2Fimg%2Fstaff%2Fdummy.jpg&imgrefurl=https%3A%2F%2Fvkrvrao.du.ac.in%2Fofficestaff.html&docid=6AFTBz_pTlzLsM&tbnid=svbLPA1Z_bKIIM&vet=12ahUKEwjrqOGBtaeMAxXw9zgGHWOZCgoQM3oECEoQAA..i&w=300&h=300&hcb=2&ved=2ahUKEwjrqOGBtaeMAxXw9zgGHWOZCgoQM3oECEoQAA"

            }
        }
    }

   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/raghvendru");
    const json = await data.json()
    console.log(json);
    this.setState({
        userInfo:json,
    })
    }
    render(){   
    const {name,location,avatar_url} = this.state.userInfo;
  return (
    <div className="user-card">
      <h1>Name:{name}</h1>
      <h2>location:{location}</h2>
      <img src ={avatar_url}/>
    </div>
  )
    }
}
export default UserClass;

