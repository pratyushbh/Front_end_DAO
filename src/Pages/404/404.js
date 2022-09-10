import React from 'react'
import "./404.css";
import Error_404_png from "../../assets/404.png";


const Error_404 = () => {
  return (
    <div className='container text-center'>
      <div className='Error_404_heading'><h3>Error</h3><h1>404</h1></div>
      <div className='Status_Bot_404'>
        <img src={Error_404_png} className="Error_404_logo" alt="logo" />
      </div>
      <div className='statement_404'>
        <h3>The page that you are looking for is not found</h3>
      </div>
    </div>

  )
}

export default Error_404