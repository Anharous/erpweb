import React, { useEffect, useState } from 'react';
import "./assignment.css"

interface Assignment {
  assignmentNumber: string;
  assignmentName: string;
  subjectCode: string;
  subjectTitle: string;
  assignmentGivenDate: string;
  dueDate: string;
}

const StudentAssignmentPage: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const storedAssignments = localStorage.getItem('assignments');
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    }
  }, []);

  return (
    <div>
      <h1>Assignment Details</h1>
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

export default StudentAssignmentPage;
