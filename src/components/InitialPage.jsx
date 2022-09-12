import React from 'react'
import '../styles/InitialPage.css'
import Clouds from "../images/initial-image.jpg"

const InitialPage = () => {
  return (
    <div className='initial-image-container'>
      <img className='initial-image' src={Clouds} alt="clouds" />
      <h1 className='top-header-image'>
        <span className='soft'>Weather</span> App
      </h1>
    </div>
  )
}

export default InitialPage
