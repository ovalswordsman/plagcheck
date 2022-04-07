import React, { useState, useEffect } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import "../Css/studenthome.css";
import SideBar from "./Sidebar";
import CourseBox from "./CourseBox";
import Studentpopup from "./StudentPopup";


const StudentHome = (props) => {
  console.log(props);
  const navigate = useNavigate();
  let { course } = useParams();
  const ar=["Course 1","Course 2","Course 3","course 4" ]

   const [userData, setUserData] = useState({});
   const [buttonPopup, setButtonPopup]=useState(false);
  
  const homePage = async () => {
    console.log(props?.userData?.user?.email)
    try {
      const res = await fetch("/studenthome", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        
      body: JSON.stringify({
        email: props?.userData?.user?.email
      })
        // credentials: "include",
      });
      const data = await res.json();

      console.log(data);
      setUserData(data.data);
      
    } catch (err) {
      console.log(err);
      // navigate("/login");
    }
  };
  useEffect(() => {
    homePage();
  }, []);
  return (
  //   <section className="section about-section gray-bg" id="about">
  //     <SideBar />
  //     <div className="container">
  //       <div className="row align-items-center mb-3 flex-row-reverse">
  //         <div className="col-lg-6">
  //           <div className="about-text go-to">
  //             <h3 className="dark-color">{userData.name}</h3>

  //             <div className="row about-list">
  //               <div className="col-md-6">
  //                 <div className="media">
  //                   <label>Batch</label>
  //                   <p>3rd</p>
  //                 </div>
  //                 <div className="media">
  //                   <label>Roll Number</label>
  //                   <p>1901096</p>
  //                 </div>
  //                 <div className="media">
  //                   <label>Branch</label>
  //                   <p>CSE</p>
  //                 </div>
  //               </div>
  //               <div className="col-md-6">
  //                 <div className="media">
  //                   <label>E-mail</label>
  //                   <p>info@domain.com</p>
  //                 </div>
  //                 <div className="media">
  //                   <label>Phone</label>
  //                   <p>820-885-3321</p>
  //                 </div>
  //                 <div className="media">
  //                   <label>Group</label>
  //                   <p>CS21</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-lg-6">
  //           <div className="about-avatar">
  //             <img
  //               src="https://bootdey.com/img/Content/avatar/avatar7.png"
  //               title="img"
  //               alt="avatar"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  <section className="student-home">
    
      {/* <div className="project-heading">Plag Check</div> */}
     
        {/* <h2>
            
              <img src={require('../Images_copy/Plag_Check.png')} height="60"></img>   
              <h3 style="color:black;">Ｐｌａｇ Ｃｈｅｃｋ</h3>         
           
            
          </h2>
         */}
        {/* <h3 style="color:black;">Ｐｌａｇ Ｃｈｅｃｋ</h3>      */}
        <h2 className="List-text">List of courses joined :</h2>
        
    
      <button className="btn1" onClick={() => setButtonPopup(true)}>Join Class</button>
      {/* <button className="open_butt">Open</button> */}
      <img  class="learning-image" src={require('../Images_copy/image.png')} height="200" width="150"></img>
      {/* <button className="btn2">Analyze Submission</button> */}
      <form className="Form">
     
        {userData?.courses && userData?.courses.map((course,i)=>
        <CourseBox key ={i} course= {course.course}  />
        )}
     

    </form>
          <Studentpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            {/* <h2>Enter the course code</h2> */}
          </Studentpopup>

    </section>
  );
};

export default StudentHome;
