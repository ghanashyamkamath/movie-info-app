import React, { Component } from "react";
import {searchMovie} from "../../actions/searchActions"

import {connect} from 'react-redux'
export class SearchForm extends Component {


    onChange= (e) =>{
        this.props.searchMovie(e.target.value)


    }
  render() {
    return (
      <div>
        <div class="card mt-3">
          <div class="card-header">IMDB</div>
          <div class="card-body">
            <div className="container ">
              <form className="form-group mt-3">
                <i className="fa fa-search" />
                <label for="abc">Search for movies and TV series</label>
                <input
                  type="text"
                  class="form-control"
                  id="abc"
                  name="searchText"
                  placeholder="search here"
                  onChange={this.onChange}
                />
                
                  <button className="btn btn-primary mt-3">
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

export default connect(mapStateToProps,{searchMovie})(SearchForm);
