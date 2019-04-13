import React from 'react';

const VideoDeatils = ({videoDeatils})=>{
 console.log('form details', videoDeatils);
 if(!videoDeatils){
 return <div>Search your keyword</div>;
 }
 const videoSRC = `https://www.youtube.com/embed/${videoDeatils.id.videoId}`;
 return   <div className="ui segment">  
            <div class="ui embed" >
            <iframe width="560" height="315" src={videoSRC} ></iframe>
            </div>
            <div className="ui segment">
        <div className="ui header">{videoDeatils.snippet.title}</div> 
        <p>{videoDeatils.snippet.description}</p>

     
 </div>
 </div>;
}

export default VideoDeatils;