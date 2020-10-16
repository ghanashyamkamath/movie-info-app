import React, { Component } from "react";
import {searchMovie,fetchMovies} from "../../actions/searchActions"

import {connect} from 'react-redux'
export class SearchForm extends Component {


    onChange= (e) =>{
        this.props.searchMovie(e.target.value)


    }
    onSubmit =(e) =>{
      e.preventDefault();
      this.props.fetchMovies(this.props.text)
    }
  render() {
    return (
      <div>
        <div class="card mt-3">
          <div class="card-header">IMDB</div>
          <div class="card-body">
            <div className="container ">
              <form id="searchForm" onSubmit={this.onSubmit} className="form-group mt-3">
                <i className="fa fa-search" />
                <label for="abc">Search for movies and TV series</label>
                <input
                  type="text"
                  class="form-control"
                  
                  name="searchText"
                  placeholder="search here"
                  onChange={this.onChange}
                />
                
                  <button type="submit" className="btn btn-primary mt-3">
                    Search
                  </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
    text:state.movies.text

})

export default connect(mapStateToProps,{searchMovie,fetchMovies})(SearchForm);
