import './menu.css';

const defaultContent = {
    title: 'Menu'
}

const menuElement = {};

// All menu buttons
function fillContent() { 
    menuElement.element.innerHTML = `
    <div>
        <h2>Menu</h2>
        <div class="button-container">
            <button onclick="window.location.href='https://2025-ui-sp.github.io/3-Dermatome-Mapper/'">Home</button>
            <button onclick="window.location.href='glossary.html'">Glossary</button>
            <button onclick="window.location.href='quiz.html'">Quiz</button>
            <button class="disclaimer-button" onclick="window.location.href='disclaimer.html'">Disclaimer</button>
        </div>
    </div>
    `;
}

export function createMenu(element) {
    menuElement.element = element;
    fillContent();

    // Add a toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.classList.add('toggle-button');
    toggleButton.onclick = () => {
        menuElement.element.classList.toggle('collapsed');
    };

    // Create a wrapper div to stack toggle button and menu vertically
    const wrapper = document.createElement('div');
    wrapper.classList.add('menu-wrapper');

    // Replace the original element with the wrapper and append children
    element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(toggleButton);
    wrapper.appendChild(element);
}

export function updateMenu(content) {
    fillContent();
}