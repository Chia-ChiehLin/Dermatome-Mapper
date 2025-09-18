import './dropdown.css';
import { updateInfo } from '../info/info';

const defaultContent = {
    title: 'Nerve Roots'
};

const dropElement = {};


const glossaryDefinitions = {
    C1: {
      title: "C1",
      description: `<p>Areas of pain include the head and neck. May result in diminished or absent neck flexion.</p>`
    },
    C7: {
      title: "C7",
      description: `<p>Pain in fingers 2, 3, and/or 4. May result in diminished or absent elbow extension or wrist flexion.</p>`
    },
    C8: {
      title: "C8",
      description: `<p>Pain in finger 5. May result in diminished or absent finger flexion, hand grip, and thumb extension.</p>`
    },
    L1: {
      title: "L1",
      description: `<p>Areas of pain include the hip flexor and hip adductors. May result in diminished or absent hip flexion.</p>`
    },
    L2: {
      title: "L2",
      description: `<p>Areas of pain include the Anterior and inner thigh.</p>`
    },
    L3: {
      title: "L3",
      description: `<p>Areas of pain include Anterior thigh, medial thigh, and medial knee. May result in diminished or absent patellar reflex.</p>`
    },
    L4: {
      title: "L4",
      description: `<p>Areas of pain include the Lateral thigh, anterior knee, and medial leg. May result in diminished or absent patellar reflex.</p>`
    },
    L5: {
      title: "L5",
      description: `<p>Areas of pain include the Lateral leg and dorsal foot. May result in diminished or absent achilles reflex.</p>`
    },
    S1: {
      title: "S1",
      description: `<p>Areas of pain include the hips and groin. May result in diminished or absent plantar flexio.</p>`
    },
    S2: {
      title: "S2",
      description: `<p>Area of pain is in the back of the thigh. May result in diminished or absent hip extension and knee flexion.</p>`
    },
    S3: {
      title: "S3",
      description: `<p>Area of pain is in the medial buttock. May result in diminished or absent hip extension and knee flexion.</p>`
    },
    S4: {
      title: "S4",
      description: `<p>Area of pain is in the perineal. May result in diminished or absent function of pelvic floor muscles.</p>`
    },
    S5: {
      title: "S5",
      description: `<p>Area of pain is in the perineal. May result in diminished or absent function of pelvic floor muscles.</p>`
    }
  };
// Fill the dropdown menu with dermatome levels
function fillContent() {
    dropElement.element.innerHTML = `
    <div>
        <h2>Nerve Roots</h2>
        <div class="dropdown-content">
            <div class="dermatome-category">
                <h3>Cervical</h3>
                <a href="#C1" data-nerve="C1">C1</a>
                <a href="#C7" data-nerve="C7">C7</a>
                <a href="#C8" data-nerve="C8">C8</a>
            </div>
            <div class="dermatome-category">
                <h3>Lumbar</h3>
                <a href="#L1" data-nerve="L1">L1</a>
                <a href="#L2" data-nerve="L2">L2</a>
                <a href="#L3" data-nerve="L3">L3</a>
                <a href="#L4" data-nerve="L4">L4</a>
                <a href="#L5" data-nerve="L5">L5</a>
            </div>
            <div class="dermatome-category">
                <h3>Sacral</h3>
                <a href="#S1" data-nerve="S1">S1</a>
                <a href="#S2" data-nerve="S2">S2</a>
                <a href="#S3" data-nerve="S3">S3</a>
                <a href="#S4" data-nerve="S4">S4</a>
                <a href="#S5" data-nerve="S5">S5</a>
            </div>
        </div>
    </div>    
    `;

    const link_to_info = dropElement.element.querySelectorAll('a[data-nerve');
    link_to_info.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const nerve = link.getAttribute('data-nerve');
            handleNerveClick(nerve);
        });
    });
}

function handleNerveClick(nerve_clicked) {
    const nerveInfo = glossaryDefinitions[nerve_clicked];
    updateInfo(nerveInfo);
}


export function createDermatomeMenu(element) {
    // Store reference to the element
    dropElement.element = element;
    
    // Fill the menu with content
    fillContent();
    
    // Add click event to the dropdown header
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Find Nerve';
    toggleButton.classList.add('toggle-button');
    toggleButton.onclick = () =>{
        dropElement.element.classList.toggle('collapsed');
    };

    const wrapper = document.createElement('div');
    wrapper.classList.add('dropdown-wrapper');

    element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(toggleButton);
    wrapper.appendChild(element);
    
}

export function updateDermatomeMenu(content) {
    // Refresh the content
    fillContent();
}