import React from 'react';

const VideoItem = ({video,onVideoSelect})=>{
  console.log(video);
    return <div onClick={()=>onVideoSelect(video)} key={video.snippet.thumbnails.high.url}  class="item">
    <div class="image">
      <img width="200px" src={video.snippet.thumbnails.high.url}/>
    </div>
    <div class="content">
      <a class="ui header" >{video.snippet.title}</a>
      <div class="content">
      <div class="title">From: {video.snippet.channelTitle} Publlished at {video.snippet.publishedAt}</div>
      <div class="description">{video.snippet.description}</div>
    </div>
      <div class="description">
        <p></p>
      </div>
    </div>
  </div>
}
export default VideoItem;



