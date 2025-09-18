import './info.css';

// Global objects
const defaultContent = {
    title: 'Info',
    description: '<p>To get more information, click on a feature.</p>'
}

const infoElement = {};

function fillContent(content) {
    infoElement.element.innerHTML = `
    <div>
        <h2>${content.title}</h2>
        <div>
            ${content.description}
        </div>
    </div>
    `;
}

export function createInfo(element) {
    infoElement.element = element;
    fillContent(defaultContent);
}

export function updateInfo(content) {
    content ? fillContent(content) : fillContent(defaultContent); 
}

