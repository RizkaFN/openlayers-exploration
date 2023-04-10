import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import { useEffect, useRef } from 'react';
import 'ol/ol.css';

function App() {
  const mapRef = useRef(null);

  useEffect(()=> {
    const map = new Map({
      target: mapRef.current,
      view: new View({
          center: [0, 0],
          zoom: 2,
      }),
      layers: [
          new TileLayer({
              source: new OSM(),
          }),
      ],
    });

    return () => {
      map.setTarget(null);
    }
  },[])


  return (
    <div id="map" ref={mapRef}></div>
  )
}

export default App
