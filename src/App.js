import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';
import {Provider} from 'react-redux'
import { HashRouter as Router,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
// import Footer from "./components/Footer";
import Movie from "./components/home/Movie"

import store from './store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
