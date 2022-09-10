import React from 'react'
import "./Underwork.css";
import Under_work_2 from "../../assets/Under_work_2.png";
import Under_work_1 from "../../assets/Under_work_1.png";

const Underwork = () => {
  return (
    <div className='container text-center'>
      <h1 className='under_work_heading'>UNDERWORK</h1>
      <div className='Status_Bot_UnderWork'>
        <img src={Under_work_1} className="Under_work_1_logo" alt="logo" />
        <img src={Under_work_2} className="App-logo" alt="logo" />
      </div>
      <div className='statement'>
        <h3>This section of site is under development</h3>
      </div>
    </div>

  )
}

export default Underwork