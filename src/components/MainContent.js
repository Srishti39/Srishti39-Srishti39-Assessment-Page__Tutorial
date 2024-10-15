
// import React, { useState } from 'react';
// import AssessmentModal from './components/AssessmentModal'; // Assuming you have a modal component
// import MainContent from './components/MainContent';

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

//   const openModal = () => setIsModalOpen(true); // Function to open the modal
//   const closeModal = () => setIsModalOpen(false); // Function to close the modal

//   return (
//     <div className="App">
//       {/* Main Content where the New Assessment button exists */}
//       <MainContent openModal={openModal} />

//       {/* Assessment Modal */}
//       <AssessmentModal isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// }

// export default App;

import React from 'react';

function MainContent({ openModal }) { // Receive openModal as a prop
  return (
    <div className="main-content">
      {/* Assessments Overview Section */}
      <div className="assessments-overview">
        <div className="stat-box">
          <h3>Total Assessments</h3>
          <p>10</p>
        </div>
        {/* Add more stat-boxes as needed */}
      </div>

      {/* My Assessments Section */}
      <div className="my-assessment-section">
        <h3>My Assessments</h3>
        <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
        
        {/* New Assessment Button */}
        <div className="assessment-box new">
          <button onClick={openModal}>New Assessment</button> {/* Trigger openModal */}
        </div>

        {/* Other content like previously created assessments */}
      </div>
    </div>
  );
}

export default MainContent;
