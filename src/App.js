import React from 'react';
import logo from './logo.svg';
import './App.css';
import { dojoRequire } from 'esri-loader';
import EsriLoader from 'esri-loader-react';

class App extends React.PureComponent {

  createMap = () => {

    dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => { 
      new MapView({
        container: this.mapContainer,
        map: new Map({basemap: 'topo'})
      })
    });
  }

  render() {

    const options = {
      url: 'https://js.arcgis.com/4.3/'
    };

    return (
      <div className="App">
        <EsriLoader options={options} ready={this.createMap} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div ref={node => this.mapContainer = node} className='map-view'></div>
      </div>
    );
  }
}

export default App;
