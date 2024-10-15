// // Import necessary libraries and components
// import React, { useState } from 'react';
// import './AssessmentModal.css'; // Import CSS for styling

// // Create a functional component for the Assessment Modal
// const AssessmentModal = ({ isOpen, onClose }) => {
//   // State variables to hold the values of the form inputs
//   const [assessmentName, setAssessmentName] = useState(''); // Name of the assessment
//   const [purpose, setPurpose] = useState(''); // Purpose of the assessment
//   const [description, setDescription] = useState(''); // Description of the assessment
//   const [skills, setSkills] = useState([]); // Array to hold selected skills
//   const [duration, setDuration] = useState(''); // Duration of the assessment

//   // Function to handle skill input change
//   const handleSkillChange = (event) => {
//     const { value } = event.target; // Get the input value
//     // Add the skill to the array if it's not already included
//     if (!skills.includes(value)) {
//       setSkills([...skills, value]);
//     }
//   };

//   // Function to handle save button click
//   const handleSave = () => {
//     // Log the assessment data (you can replace this with your saving logic)
//     console.log({
//       assessmentName,
//       purpose,
//       description,
//       skills,
//       duration,
//     });
//     onClose(); // Close the modal after saving
//   };

//   // Render the modal only if isOpen is true
//   return (
//     isOpen && (
//       <div className="modal-overlay"> {/* Overlay for modal */}
//         <div className="modal-content"> {/* Modal content container */}
//           <h2>Create New Assessment</h2> {/* Modal title */}
//           <label>Name of assessment</label>
//           <input
//             type="text"
//             value={assessmentName}
//             onChange={(e) => setAssessmentName(e.target.value)} // Update state on input change
//             placeholder="Type Here" // Placeholder text
//           />
//           <label>Purpose of the test is</label>
//           <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
//             <option value="">Select</option>
//             {/* Add more options as needed */}
//           </select>
//           <label>Description</label>
//           <select value={description} onChange={(e) => setDescription(e.target.value)}>
//             <option value="">Select</option>
//             {/* Add more options as needed */}
//           </select>
//           <label>Skills</label>
//           <input
//             type="text"
//             onChange={handleSkillChange} // Call handleSkillChange on input change
//             placeholder="Type here"
//           />
//           <div>
//             {/* Display selected skills */}
//             {skills.map((skill) => (
//               <span key={skill}>{skill} <button onClick={() => setSkills(skills.filter(s => s !== skill))}>X</button></span>
//             ))}
//           </div>
//           <label>Duration of assessment</label>
//           <input
//             type="text"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)} // Update duration state
//             placeholder="HH:MM:SS"
//           />
//           <button onClick={handleSave}>Save</button> {/* Save button */}
//           <button onClick={onClose}>Close</button> {/* Close button */}
//         </div>
//       </div>
//     )
//   );
// };

// // Export the AssessmentModal component
// export default AssessmentModal;


// // Import necessary libraries and components
// import React, { useState } from 'react';
// import './AssessmentModal.css'; // Import CSS for styling

// // Create a functional component for the Assessment Modal
// const AssessmentModal = ({ isOpen, onClose }) => {
//   // State variables to hold the values of the form inputs
//   const [assessmentName, setAssessmentName] = useState(''); // Name of the assessment
//   const [purpose, setPurpose] = useState(''); // Purpose of the assessment
//   const [description, setDescription] = useState(''); // Description of the assessment
//   const [skills, setSkills] = useState([]); // Array to hold selected skills
//   const [skillInput, setSkillInput] = useState(''); // For the input of skills
//   const [duration, setDuration] = useState(''); // Duration of the assessment

//   // Function to handle skill input change
//   const handleSkillChange = (event) => {
//     setSkillInput(event.target.value); // Track the input value for the skills
//   };

//   // Function to handle adding a new skill when Enter is pressed
//   const handleAddSkill = (event) => {
//     if (event.key === 'Enter' && skillInput.trim() !== '') {
//       if (!skills.includes(skillInput)) {
//         setSkills([...skills, skillInput]); // Add the skill to the array
//       }
//       setSkillInput(''); // Clear the input after adding
//     }
//   };

//   // Function to handle removing a skill
//   const handleRemoveSkill = (skillToRemove) => {
//     setSkills(skills.filter((skill) => skill !== skillToRemove));
//   };

//   // Function to handle save button click
//   const handleSave = () => {
//     // Log the assessment data (you can replace this with your saving logic)
//     console.log({
//       assessmentName,
//       purpose,
//       description,
//       skills,
//       duration,
//     });
//     onClose(); // Close the modal after saving
//   };

//   // Render the modal only if isOpen is true
//   return (
//     isOpen && (
//       <div className="modal-overlay"> {/* Overlay for modal */}
//         <div className="modal-content"> {/* Modal content container */}
//           <h2>Create New Assessment</h2> {/* Modal title */}
          
//           {/* Name of assessment input */}
//           <label>Name of assessment</label>
//           <input
//             type="text"
//             value={assessmentName}
//             onChange={(e) => setAssessmentName(e.target.value)} // Update state on input change
//             placeholder="Type Here" // Placeholder text
//           />

//           {/* Purpose of the test dropdown */}
//           <label>Purpose of the test is</label>
//           <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
//             <option value="">Select</option>
//             <option value="Practice">Practice</option>
//             <option value="Exam">Exam</option>
//           </select>

//           {/* Description dropdown */}
//           <label>Description</label>
//           <select value={description} onChange={(e) => setDescription(e.target.value)}>
//             <option value="">Select</option>
//             <option value="Maths">Maths</option>
//             <option value="Physics">Physics</option>
//             <option value="Computer">Computer</option>
//           </select>

//           {/* Skills input */}
//           <label>Skills</label>
//           <input
//             type="text"
//             value={skillInput}
//             onChange={handleSkillChange} // Call handleSkillChange on input change
//             onKeyPress={handleAddSkill} // Add skill when Enter is pressed
//             placeholder="Type and press Enter to add skill"
//           />

//           {/* Display added skills */}
//           <div className="skills-list">
//             {skills.map((skill) => (
//               <span key={skill} className="skill-tag">
//                 {skill} <button onClick={() => handleRemoveSkill(skill)}>X</button> {/* Remove skill */}
//               </span>
//             ))}
//           </div>

//           {/* Duration input */}
//           <label>Duration of assessment</label>
//           <input
//             type="text"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)} // Update duration state
//             placeholder="HH:MM:SS"
//           />

//           {/* Save and Close buttons */}
//           <div className="modal-actions">
//             <button onClick={handleSave}>Save</button> {/* Save button */}
//             <button onClick={onClose}>Close</button> {/* Close button */}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// // Export the AssessmentModal component
// export default AssessmentModal;



import React, { useState } from 'react';
import { Modal, Button, Dropdown } from 'react-bootstrap'; // Import Bootstrap components

const AssessmentModal = ({ isOpen, onClose }) => {
  const [assessmentName, setAssessmentName] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [skills, setSkills] = useState('');

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Assessment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Name of Assessment:</label>
          <input
            type="text"
            value={assessmentName}
            onChange={(e) => setAssessmentName(e.target.value)}
            placeholder="Enter assessment name"
          />

          <label>Purpose of Test:</label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedPurpose || 'Select Purpose'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedPurpose('Purpose 1')}>Purpose 1</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedPurpose('Purpose 2')}>Purpose 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <label>Description:</label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedDescription || 'Select Description'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedDescription('Description 1')}>Description 1</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedDescription('Description 2')}>Description 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <label>Skills:</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter skills"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {
          // Handle next action here, e.g., submit data or move to the next step
          console.log({ assessmentName, selectedPurpose, selectedDescription, skills });
          onClose(); // Close modal after action
        }}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AssessmentModal;
