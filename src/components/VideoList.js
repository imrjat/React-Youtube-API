import React from 'react';
import VideoItem from './VideoItem';



const VideoList=({videos,onVideoSelect})=> {
    const renderVideos = videos.map((video)=>{
        return <div key={video.snippet.thumbnails.high.url} className="ui list"><VideoItem onVideoSelect={onVideoSelect} video={video}/></div>
    });
return <div >{renderVideos}</div>
}

 
export default VideoList;