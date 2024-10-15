// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import Header from './components/Header'; // Adjust the path if necessary
// import NavBar from './components/NavBar'; // Adjust the path if necessary
// import MainContent from './components/MainContent'; // Adjust the path if necessary
// import Footer from './components/Footer'; // Adjust the path if necessary
// import './App.css';

// function App() {
//   const [isNavBarActive, setNavBarActive] = useState(false); // State to control sidebar visibility

//   const toggleNavBar = () => {
//     setNavBarActive(!isNavBarActive); // Toggle the sidebar state
//   };

//   return (
//     <div className="App">
//       {/* Header Component */}
//       <Header />

//       {/* Hamburger Button for Mobile */}
//       <button className="hamburger" onClick={toggleNavBar}>
//         &#9776; {/* Unicode character for hamburger icon */}
//       </button>

//       {/* Dashboard layout contains the NavBar (Sidebar) and MainContent */}
//       <div className="dashboard">
//         <NavBar className={isNavBarActive ? 'active' : ''} /> {/* Sidebar with navigation links */}
//         <MainContent /> {/* Main dashboard content */}
//       </div>

//       {/* Footer Component */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AssessmentModal from './components/AssessmentModal'; // Import Modal
import './App.css';

function App() {
  // State to control the visibility of the sidebar
  const [isNavBarActive, setNavBarActive] = useState(false);
  // State to control the visibility of the modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle the sidebar's visibility
  const toggleNavBar = () => {
    setNavBarActive(!isNavBarActive);
  };

  // Function to toggle the modal's visibility
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Header />

      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={toggleNavBar}>
        &#9776; {/* Unicode for hamburger icon */}
      </button>

      <div className="dashboard">
        <NavBar className={isNavBarActive ? 'active' : ''} />
        
        {/* Dashboard Content */}
        <div className="dashboard-content">
          <h2>Dashboard</h2>

          {/* Assessment Section */}
          <div className="assessment-section">
            <h3>Assessment</h3>
            <p>Total Assessment: {/* Total number of assignments */} 5</p>
            <p>Candidates:</p>
            <ul>
              <li>Total: {/* Total candidates */} 20</li>
              <li>Attempted: {/* Number of candidates who attempted */} 15</li>
            </ul>

            <div className="candidate-source">
              <h4>Candidate Source</h4>
              <ul>
                <li>Email</li>
                <li>Social Share</li>
                <li>Unique Link</li>
              </ul>
            </div>

            <div className="my-assessment">
              <h4>My Assessment</h4>
              <button className="new-assessment-btn" onClick={toggleModal}>
                New Assessment
              </button>
              <ul>
                <li>
                  {/* Example of already created assessment */}
                  Assessment 1: Date - 2024-10-01, Duration - 30 mins, Questions - 10, Share, User Initials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Assessment Modal */}
      <AssessmentModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default App;
