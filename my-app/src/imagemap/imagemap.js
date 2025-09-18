import 'leaflet/dist/leaflet.css';
import './imagemap.css';
import L from 'leaflet';
import loadGeoJsons from '../geojson/geojson';

/**
 * Create an image map
 * By using Leaflet imageOverlay and CRS.Simple
 * @param {HTMLElement} element - location on the page to put the map
 */
export default async function createImageMap(element) {
    // I should but these values in a config file
    const imageHeight = 2480;
    const imageWidth = 2292;
    const imageFile = "Grant_1962_663.png";
    const bounds = [[0, 0], [imageHeight, imageWidth]];
    const map = L.map(element, {
        crs: L.CRS.Simple,
        minZoom: -2,
        attributionControl: false,
        maxBounds: bounds, //restrict panning to the image bounds
        maxBoundsViscosity: 1.0, 
        bounceAtZoomLimits: true, //Bounce back when you try to pan outside bounds
        inertia: true //Smooth out the panning
    });

   
    const image = L.imageOverlay(imageFile, bounds).addTo(map);

    map.fitBounds(bounds);

    loadGeoJsons(map);

}
