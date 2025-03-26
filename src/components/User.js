import React from 'react'
import { useState } from 'react'


const User = (props) => {

const [count,setCount] = useState(0);
const {name,location} = props;

  return (
    <div>
      <h1>Count :{count}
        <button onClick={() => setCount(count+1)}>Number increasig by functional</button>
      </h1>
      <h1>Name:{name}</h1>
      <h3>location:{location}</h3>
    </div>
  )
}

export default User
