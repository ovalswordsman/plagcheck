import React from 'react';
import'../Css/StudentPopup.css';
function Studentpopup(props) {
  return (props.trigger) ? (
    <div className="Studentpopup">
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>
                close</button>
                
                {props.children}
        </div>
         <form action className='text'> 
        <label for="name" background-color='white'>Enter the course code:</label>
        <input type="text"></input>
        <br></br>
       
        </form>
        <div><button className='course-btn'> Enter Course</button>
        </div>
         
    </div>
   
  ) : "" ;
}

export default Studentpopup