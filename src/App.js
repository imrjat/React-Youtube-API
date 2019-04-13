import React, { Component } from 'react';
import SearchBar from './components/SeachBar';
import VideoList from './components/VideoList';
import Youtube from './api/Youtube';
import VideoDeatils from './components/VideoDetails';


class App extends Component {
  state={
    videos:[],
    videoDeatils:null,
  }
  onSearchSubmit= async (search)=>{
   const responce = await Youtube.get('/search',{
      params:{
        q:search,
      }
    });
    
    this.setState({videos:responce.data.items});
  }

  onVideoSelect = video =>{
    
    window.scrollTo(0, 0);
    this.setState({videoDeatils:video})
  }
  render() {
    return (
      <div style={{marginTop:"30px"}} className="ui container">
          <SearchBar  onSearchSubmit={this.onSearchSubmit}/>
          <VideoDeatils videoDeatils={this.state.videoDeatils}/>
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
