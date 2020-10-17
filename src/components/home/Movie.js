import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchMovie} from '../../actions/searchActions'



export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="row">
            <div className="col-md-4 card card-body">
              <img src="#movie-poster" className="thumbnail" alt="Poster" />
            </div>
            <div className="col-md-8">
              <h2 className="mb-4">MOvie Title</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Genre:</strong>Movie Genre
                </li>
                <li className="list-group-item">
                  <strong>IMDB Rating:</strong>Movie IMDB Rating
                </li>
                <li className="list-group-item">
                  <strong>Writer:</strong>Movie Writer
                </li>
                <li className="list-group-item">
                  <strong>Actors:</strong>Movie Actors
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="card card-body bg-dark my-5 text-light">
              <div className="col-md-12">
                <h3>About</h3>
                About the Movie
                <hr />
                <a
                  href="#"
                  target="blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on IMDB
                </a>
                <a href="#" className="btn btn-default text-light">
                  Go back to search
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state =>({
  loading:state.movies.loading,
  movie:state.movies.movie

})

export default connect(mapStateToProps,{fetchMovie})(Movie)
