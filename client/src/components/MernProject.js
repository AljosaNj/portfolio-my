 import React from 'react'
 import "./MernProject.css";
 import VideoPlayer from './VideoPlayer'
 
 const MernProject = () => {
   return (
      <div className="mernproject " id="mernproject">
                <div className="container">
                    <div className="row">
                        <div className="col__2">
                         <div className='mernvideo'>
                           <VideoPlayer />
                         </div>
                           
                          
                        </div>
                        <div className="col__2">
                            <h1 className="mern__heading ">MERN  GymClients</h1>
                            <div className="mern__meta">
                            <p className="mern__text p__color">
                MERN Project GymClients, MongoDB,  ReactJS, Nodejs, Express.
In this project, how do we save the data in the database, how can we change them. Saving the data of our clients, monthly client statistics .
              </p>
           
              <div className=" d__flex align__items__center">
                    <a  href='https://github.com/AljosaNj/GymClients'   >
                 <button  className="btn"  >Source</button> 
                    </a>
                  
                 </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>




   )
 }
 
 export default MernProject