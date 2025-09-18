import './main.css';
import { createMenu } from './src/menu/menu';

document.querySelector('#glossary').innerHTML = `
<div style="display: flex; flex-direction: row;">
  <div id="menu"></div>
  <div>
    <div id="header">
      <h1 id="title">Dermatome Glossary</h1>
      <br>
    </div>
    <div>
        <table>
            <tr>
                <th>Nerve</th>
                <th>Dermatome Area</th>
                <th>Key Muscles</th>
                <th>Deficit</th>
                <th>Sensory/Pain Areas</th>
            </tr>
            <tr>
                <td>L1</td>
                <td>Inguinal region</td>
                <td>Hip flexor, hip adductors</td>
                <td>Diminished/absent hip flexion</td>
                <td>Iliac crest and groin</td>
            </tr>
            <tr>
                <td>L2</td>
                <td>Anterior mid-thigh</td>
                <td>Hip flexor, hip adductors</td>
                <td>Diminished/absent hip flexion</td>
                <td>Anteriorf and inner thigh</td>
            </tr>
            <tr>
                <td>L3</td>
                <td>Distal anterior thigh</td>
                <td>Knee extensors</td>
                <td>Diminished/absent patellar reflex</td>
                <td>Anterior thigh, medial thigh, and medial knee</td>
            </tr>
            <tr>
                <td>L4</td>
                <td>Medial lower leg/foot</td>
                <td>Ankle dorsiflexors, hip abduction, knee flexion</td>
                <td>Diminished/absent patellar reflex</td>
                <td>Lateral thigh, anterior knee, and medial leg</td>
            </tr>
            <tr>
                <td>L5</td>
                <td>Lateral leg/foot</td>
                <td>Long toe extensors, hip extension</td>
                <td>Diminished/absent achilles reflex</td>
                <td>Lateral Leg, dorsal foot</td>
            </tr>
            <tr>
                <td>S1</td>
                <td>Buttock, thigh, and leg posterior</td>
                <td>Plantarflexion of the foot at the ankle joint</td>
                <td>Diminished/absent plantar flexion</td>
                <td>Hips and groin</td>
            </tr>
            <tr>
                <td>S2</td>
                <td>Buttock, thigh, and leg posterior</td>
                <td>Adduction of the toes at the metatarsophalangeal joints</td>
                <td>Diminished/absent hip extension and knee flexion</td>
                <td>Back of thigh</td>
            </tr>
            <tr>
                <td>S3</td>
                <td>Groin, medial thigh to knee</td>
                <td>Anal reflexive contraction of the external anal shpincter</td>
                <td>Diminished/absent hip extension and knee flexion</td>
                <td>Medial buttock</td>
            </tr>
            <tr>
                <td>S4</td>
                <td>Perineum, genitals, lower sacrum</td>
                <td>Rectal and/or bladder dysfunction</td>
                <td>Diminished/absent function of pelvic floor muscles</td>
                <td>Perineal</td>
            </tr>
            <tr>
                <td>S5</td>
                <td>Perineum, genitals, lower sacrum</td>
                <td>Rectal and/or bladder dysfunction</td>
                <td>Diminished/absent function of pelvic floor muscles</td>
                <td>Perineal</td>
            </tr>
            <tr>
                <td>C1</td>
                <td>Center of back of head</td>
                <td>Flexion of the neck</td>
                <td>Diminished/absent neck flexion</td>
                <td>Head/neck</td>
            </tr>
            <tr>
                <td>C2</td>
                <td>Temple, Forehead, Occiput</td>
                <td>Flexion of the neck</td>
                <td>Diminished/absent neck flexion</td>
                <td>Neck</td>
            </tr>
            <tr>
                <td>C3</td>
                <td>Entire Neck, Posterior Cheek, Temporal Area, Prolongation forward under Mandible</td>
                <td>Lateral flexion of the neck</td>
                <td>Diminished/absent neck flexion</td>
                <td>Neck</td>
            </tr>
            <tr>
                <td>C4</td>
                <td>Shoulder area, clavicular area, upper scapular area</td>
                <td>Upper portion of serratus anterior</td>
                <td>Scapular stabilization</td>
                <td>Upper shoulder, over clavicle</td>
            </tr>
            <tr>
                <td>C5</td>
                <td>Deltoid Area, Anterior aspect of entire arm to base of thumb</td>
                <td>Deltoid, Bicep</td>
                <td>Shoulder abduction, Elbow flexion (palm up)</td>
                <td>Lateral arm below deltoid</td>
            </tr>
            <tr>
                <td>C6</td>
                <td>Anterior Arm, Radial side of hand to thumb and index finger</td>
                <td>Brachioradialis, ECRL</td>
                <td>Elbow flexion (thumb up), Wrist extension</td>
                <td>Thumb and radial hand/forarm</td>
            </tr>
            <tr>
                <td>C7</td>
                <td>Lateral Arm and Forearm to index, long, and ring fingers</td>
                <td>Tricep, FCR</td>
                <td>Elbow extension, Wrist flexion</td>
                <td>Fingers 2, 3, 4</td>
            </tr>
            <tr>
                <td>C8</td>
                <td>Medial Arm and forearm to long, ring, and little fingers</td>
                <td>FDS</td>
                <td>Finger flexion, hand grip, thumb extension</td>
                <td>Finger 5</td>
            </tr>
        </table>
        <table class="senseTable">
            <h1 id="title" style="font-size: 16px;">Sensory Grading System</h1>
            <tr>
                <td class="senseLvl">0</td>
                <td class="senseDes">Absent</td>
            </tr>
            <tr>
                <td class="senseLvl">1</td>
                <td class="senseDes">Impaired</td>
            </tr>
            <tr>
                <td class="senseLvl">2</td>
                <td class="senseDes">Normal</td>
            </tr>
            <tr>
                <td class="senseLvl">NT</td>
                <td class="senseDes">Not testable</td>
            </tr>
        </table>
        <table>
            <h1 id="title"style="font-size: 16px;">Muscle Grading System</h1>
            <tr>
                <td class="muscleLvl">0</td>
                <td class="muscleDes">Total paralysis</td>
            </tr>
            <tr>
                <td class="muscleLvl">1</td>
                <td class="muscleDes">Palpable or visible contraction</td>
            </tr>
            <tr>
                <td class="muscleLvl">2</td>
                <td class="muscleDes">Active Movement, full range of motion, gravity eliminated</td>
            </tr>
            <tr>
                <td class="muscleLvl">3</td>
                <td class="muscleDes">Active Movement, full range of motion, against gravity </td>
            </tr>
            <tr>
                <td class="muscleLvl">4</td>
                <td class="muscleDes">Active movement, full range of motion, against gravity and provides some resistance</td>
            </tr>
            <tr>
                <td class="muscleLvl">5</td>
                <td class="muscleDes">Active movement, full range of motion, against gravity and provides normal resistance</td>
            </tr>
            <tr>
                <td class="muscleLvl">NT</td>
                <td class="muscleDes">Patient unable to reliably exert effort or muscle unavailable for testing due to factors such as imobilization, pain on effort or contracture.</td>
            </tr>
        </table>
        
        <p>*American Spinal Injury Association</p>
    </div>
  </div>
</div>
`;

createMenu(document.querySelector('#menu'));