import React from 'react';

class SearchBar extends React.Component {
    state = { 
        search:[],
     }
     onChangeHandler=event=>{
         this.setState({search:event.target.value})
     }
     onSubmitHandler=event=>{
         event.preventDefault();
        this.props.onSearchSubmit(this.state.search);
     }
    render() { 
        return ( <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitHandler}>
            <div className="field">
            <label>Video Search</label>
                <input type="text" placeholder="Search...." value={this.state.search} onChange={this.onChangeHandler}/>
            </div>

        </form>


        </div> );
    }
}
 
export default SearchBar;