
import React from 'react'
import { useNavigate } from "react-router-dom";
import '../Css/CourseBox.scss';

const CourseBox = (props) => {
  const navigate=useNavigate();
  return (
    <div className="cardBox">
      {props.course}
      <button className='Button' onClick={()=>{navigate("/StudentSecond/"+ props.course)}}>
          Open
      </button>
    </div>
  )
}

export default CourseBox