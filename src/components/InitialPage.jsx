import React from 'react'
import Clouds from "../images/initial-image.jpg"

const InitialPage = () => {
  return (
    <div className='initial-page-container'>
      <img className='initial-image' src={Clouds} alt="clouds" />
      <h1 className='top-header-image'>
        <span className='soft'>Weather</span> App
      </h1>
    </div>
  )
}

export default InitialPage
