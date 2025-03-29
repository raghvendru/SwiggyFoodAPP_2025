import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='p-4 m-4 font-bold text-4xl'>This is contact us page</h1>
      <form>
        <input className='border border-black p-2 m-2' type="text" placeholder='name'></input>
        <input className='border border-black p-2 m-2' type="text" placeholder='message'></input>
        <button className='border border-black p-2 m-2 rounded-2xl bg-pink-400 cursor-pointer'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact
