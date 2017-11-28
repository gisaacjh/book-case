import React, { Component } from 'react';
import './App.css';

import Topbar from './components/topbar.js';
import Footer from './components/footer.js';
import CategoriesMenu from './components/categoriesMenu.js';
import AddToProjectButton from './components/addToProjectButton.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Bookcase</h1>
          <Topbar />
          <Footer />
          <CategoriesMenu />
          <AddToProjectButton />
      </div>
    );
  }
}

export default App;
