import React, { Component } from 'react';
import ol from 'openlayers';

require('./css/HelloWorld.css');
require('openlayers/css/ol.css');

class HelloWorld extends Component
{
  constructor() {
    super();
  }

  componentDidMount() {
     let layers = [
      new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: 'https://ahocevar.com/geoserver/wms',
          params: {
            'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
          }
        })
      })
    ];

    let map = new ol.Map({
      controls: ol.control.defaults().extend([
        new ol.control.ScaleLine({
          units: 'degrees'
        })
      ]),
      layers: layers,
      target: 'map',
      view: new ol.View({
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 2
      })
    });
  }

  render() {
    return <div id="map"></div>;
  }
}

export default HelloWorld;
