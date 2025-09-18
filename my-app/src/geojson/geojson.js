import L, { map } from 'leaflet';
import './geojson.css';
import { updateInfo } from '../info/info';

// Golbal variables
// I should probably make a config file. 
const path = ''; // need

const geojsons = ['L4','L5','L3','L2','L1','S1','S2','S3','S4','S5','C1','C7_Nerve','C8_Nerve'];  // need


let geoJsonLayer = {}; // I think need to be global

export default async function loadGeoJsons(map) {
    // This functions takes time. So need to use await.
    const combinedJson = await combineGeoJsons(geojsons);
    geoJsonLayer =  loadGeoJson(map, combinedJson);

    // Add to detect when the map is clicked.
    map.on('click', function(e) {
        updateInfo();
    });
}

/**
 * Combine multiple geojson files into one. 
 * fetches the geojson files and combines them.
 * @param {Array} geojsons 
 * @returns {Object} combinedJson 
 */
async function combineGeoJsons(geojsons) {
    let combinedJson = {};
    // ToDO: should parallelize this. Use Promise.all. Maybe leave to the team.
    // A rule "Don't optimize until it is obviously slow".
    for (let i = 0; i < geojsons.length; i++) {
        // Fetch and read the response
        const geojson = geojsons[i];
        const response = await fetch(path + geojson + '.geojson');
        const data = await response.json();
        if (i === 0) { // clone the first geojson file
            // This may take a long time. Consider using:
            // https://www.npmjs.com/package/fast-json-stringify
            // https://www.npmjs.com/package/fast-json-parse
            // or some other efficient cloning library.
            combinedJson = JSON.parse(JSON.stringify(data));
        } else {  // for the rest copy the features
            combinedJson.features.push(data.features[0]);
        }
    }
    return combinedJson;
}

function loadGeoJson(map, geojson) {
    geoJsonLayer = L.geoJSON(geojson, {
        style,
        onEachFeature,  
    }).addTo(map);
    return geoJsonLayer;
}

/**
 * Functions for setting up interactions with the geojson layer,
 * i.e. making onEachFeature and style functions.
 */

function style(feature) {
    return {
        // border attributes
        weight: 2,
        opacity: 0,
        color: 'red',

        // fill attributes
        fillOpacity: 0,
        fillColor: 'red',  // seems that this is needed to make the highlight work
    };
}

function resetHighlight(e) {
    const layer = e.target;  // We cannot use "e.target" for the layer. 
    geoJsonLayer.resetStyle(e.target);  // We need to use geoJsonLayer because "e" does not have a "target" for "mouseout".
    // info.update();
}

function highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
        weight: 5,
        opacity: 1,
    });

    layer.bringToFront();
}

function clickedFeature(e) {
    const properties = e.target.feature.properties;
    const title = properties.name;
    const description = properties.description;
    const content = {title, description};
    L.DomEvent.stopPropagation(e);  // Prevent the map from getting the event.
    updateInfo(content);
}


function onEachFeature(feature, layer) {
    layer.bindTooltip(feature.properties.name, {sticky: true});
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: clickedFeature,
    });
}



