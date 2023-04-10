import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';

const map = new Map({
    target: 'map',
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

export default function MainMap(){
    return(
        <div id="map" style="width: 100%, height: 400px"></div>
    );
}