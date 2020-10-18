import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
          <Link className="navbar-brand" to="/">
            MovieSeriesInfo
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
          
            <a class="navbar-text fab fa-imdb fa-5x">
               
            
          </a>
        </nav>
      </div>
    );
}

export default Navbar
