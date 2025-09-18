import './main.css';
import createImageMap from './src/imagemap/imagemap';
import { createInfo } from './src/info/info';
import { createMenu } from './src/menu/menu';
import { createDermatomeMenu } from './src/search/dropdown'

document.querySelector('#app').innerHTML = `
<div style="display: flex; flex-direction: row;">
  <div id="menu"></div>
  <div>
    <div id="header">
      <h1 id="title">Interactive Dermatome Map</h1>
      <br>
    </div>
    <div id="info-map">
      <div id="imagemap"></div>
      <div id="info"></div>
    </div>
  </div>
  <div id ="dropdown"></div>
</div>
`;

createInfo(document.querySelector('#info'));
createImageMap(document.querySelector('#imagemap'));
createMenu(document.querySelector('#menu'));
createDermatomeMenu(document.querySelector('#dropdown'));