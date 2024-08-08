import React from 'react'
import './Singer.css'

function Singer({singer, singers}) {

    const {name, age} = singer;
  return (
    <div className='singer'>
        {/* <h1>Singer Length: {singers.length}</h1> */}
        <h2>Singer Name: {name}</h2>
        <h3>Singer Age: {age}</h3>
    </div>
  )
}

export default Singer