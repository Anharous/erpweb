import React, { useState } from 'react';
import "./assignment.css"

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

  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAssignment({
      ...assignment,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAssignments([...assignments, assignment]);
    setAssignment({
      assignmentNumber: '',
      assignmentName: '',
      subjectCode: '',
      subjectTitle: '',
      assignmentGivenDate: '',
      dueDate: '',
    });
    localStorage.setItem('assignments', JSON.stringify([...assignments, assignment]));
    alert('Assignment details saved!');
  };

  return (
    <div className='examcontainer'>
      
      <form onSubmit={handleSubmit} className='examform'>
      <h1>Upload Assignment Details</h1>
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

      <h1>Assignments</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Assignment Number</th>
            <th>Assignment Name</th>
            <th>Subject Code</th>
            <th>Subject Title</th>
            <th>Assignment Given Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.assignmentNumber}</td>
              <td>{assignment.assignmentName}</td>
              <td>{assignment.subjectCode}</td>
              <td>{assignment.subjectTitle}</td>
              <td>{assignment.assignmentGivenDate}</td>
              <td>{assignment.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyAssignmentPage;
