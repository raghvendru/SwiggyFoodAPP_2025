import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      {/* <User name={"raghavendra"} location={"benghlore"}/> */}
      <UserClass name={"raghavendra"} location={"benghlore"}/>
    </div>
  )
}

export default About
