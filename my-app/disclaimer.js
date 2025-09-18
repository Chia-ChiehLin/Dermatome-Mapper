import './disclaimer.css';
import { createMenu } from './src/menu/menu';

document.querySelector('#disclaimer').innerHTML = `
<div style="display: flex; flex-direction: row;">
  <div id="menu"></div>
  <div>
    <div id="header">
      <h1 id="title">Medical Disclaimer</h1>
    </div>
    <div style="padding: 2rem;">
      <p style="max-width: 800px;">
        The information provided by Dermatome Mapper is for educational and informational purposes only and is not intended as medical advice. 
        It should not be used to diagnose, treat, or replace professional medical consultation. Always seek the advice of a qualified healthcare provider
        with any questions regarding a medical condition.
      </p>
    </div>
  </div>
</div>
`;

createMenu(document.querySelector('#menu'));