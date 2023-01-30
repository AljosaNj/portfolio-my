 import React from 'react';

 import testVideo from '../videos/gymtest.webm'
 
 const VideoPlayer = () => {
   return (
     <div  className='videotest'>
            <video width="80%" height="50%"  controls>
                <source src={testVideo}  type="video/mp4" />

             </video>
        </div>


   )
 }
 
 export default VideoPlayer