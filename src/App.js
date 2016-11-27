import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isLoaded, bootstrap, dojoRequire } from 'esri-loader';

class App extends Component {

  createMap() {

    dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => { 
      new MapView({
        container: this.refs.mapView,
        map: new Map({basemap: 'topo'})
      })
    });
  }

  componentWillMount() {
    
    if (!isLoaded()) {
      bootstrap((err) => {
        if (err) {
          console.error(err);
        }

        this.createMap();
      }, {
        url: 'https://js.arcgis.com/4.1/'
      });
    } else {
      
      this.createMap();
    }
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div ref='mapView' className='map-view'></div>
      </div>
    );
  }
}

export default App;
