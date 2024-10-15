import React, { useState } from 'react';
import { Modal, Button, Dropdown } from 'react-bootstrap'; // Using react-bootstrap for UI components

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  // Sample data
  const totalAssignments = 5; // replace with dynamic data
  const totalCandidates = 100; // replace with dynamic data
  const attemptedCandidates = 75; // replace with dynamic data
  const existingAssessments = [
    { date: '2023-01-01', duration: '30 min', questions: 10, share: true, initials: 'AB' },
    // Add more assessments as needed
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Button onClick={() => setShowModal(true)}>New Assessment</Button>

      <div className="total-assessment">
        <h2>Total Assessments: {totalAssignments}</h2>
      </div>

      <div className="candidates">
        <h2>Candidates</h2>
        <p>Total Candidates: {totalCandidates}</p>
        <p>Attempted Candidates: {attemptedCandidates}</p>
      </div>

      <div className="candidate-source">
        <h2>Candidate Source</h2>
        <div className="source">
          <h3>Email</h3>
          {/* Add any related data */}
        </div>
        <div className="source">
          <h3>Social Share</h3>
          {/* Add any related data */}
        </div>
        <div className="source">
          <h3>Unique Link</h3>
          {/* Add any related data */}
        </div>
      </div>

      <div className="my-assessment">
        <h2>My Assessments</h2>
        <div className="existing-assessments">
          {existingAssessments.map((assessment, index) => (
            <div key={index} className="assessment">
              <p>Date: {assessment.date}</p>
              <p>Duration: {assessment.duration}</p>
              <p>Questions: {assessment.questions}</p>
              <p>Share: {assessment.share ? 'Yes' : 'No'}</p>
              <p>User Initials: {assessment.initials}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for New Assessment */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Assessment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Name of Assessment:</label>
            <input type="text" placeholder="Enter assessment name" />

            <label>Purpose of Test:</label>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Purpose
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Purpose 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Purpose 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <label>Description:</label>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Description
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Description 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Description 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <label>Skills:</label>
            <input type="text" placeholder="Enter skills" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary">Next</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
