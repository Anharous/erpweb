// /Component/Faculty/Assignment/page.tsx

import React, { useState } from 'react';

interface Assignment {
  assignmentNumber: string;
  assignmentName: string;
  subjectCode: string;
  subjectTitle: string;
  assignmentGivenDate: string;
  dueDate: string;
}

const FacultyAssignmentPage: React.FC = () => {
  const [assignment, setAssignment] = useState<Assignment>({
    assignmentNumber: '',
    assignmentName: '',
    subjectCode: '',
    subjectTitle: '',
    assignmentGivenDate: '',
    dueDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAssignment({
      ...assignment,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save assignment details to a backend or local storage
    localStorage.setItem('assignment', JSON.stringify(assignment));
    alert('Assignment details saved!');
  };

  return (
    <div>
      <h1>Upload Assignment Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Assignment Number:
          <input type="text" name="assignmentNumber" value={assignment.assignmentNumber} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Assignment Name:
          <input type="text" name="assignmentName" value={assignment.assignmentName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Subject Code:
          <input type="text" name="subjectCode" value={assignment.subjectCode} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Subject Title:
          <input type="text" name="subjectTitle" value={assignment.subjectTitle} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Assignment Given Date:
          <input type="date" name="assignmentGivenDate" value={assignment.assignmentGivenDate} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Due Date:
          <input type="date" name="dueDate" value={assignment.dueDate} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Save Assignment</button>
      </form>
    </div>
  );
};

export default FacultyAssignmentPage;
