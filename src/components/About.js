import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from "./UserContext";


const About = () => {
  return (
    <div>
      UserName:
      <UserContext.Consumer>
        {({loggedInUser})=><h1>{loggedInUser}</h1> }
      </UserContext.Consumer>

      <h1>This is about learn React</h1>
      {/* <User name={"raghavendra"} location={"benghlore"}/> */}
      <UserClass name={"raghavendra"} location={"benghlore"}/>
    </div>
  )
}

export default About
