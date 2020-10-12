import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';
import {Provider} from 'react-redux'
import Navbar from './components/layout/Navbar'
// import Footer from "./components/Footer";

import store from './store'


function App() {
  return (
    
      <Provider store={store}>
        <Navbar />
        <Landing />

        <Footer />
      </Provider>
    
  );
}

export default App;
