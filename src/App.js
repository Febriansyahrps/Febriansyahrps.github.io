import React, { Component } from 'react'
import { Provider } from 'react-redux';

import './styles/Main.css'
import './styles/Responsive.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import store from './store'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav />
          <Home />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </Provider>
    );
  }
}
