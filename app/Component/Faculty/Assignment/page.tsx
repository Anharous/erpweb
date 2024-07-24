// app/FacultyAssignmentPage.tsx

'use client'
import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchAssignments = async () => {
      try {
        const response = await fetch('/api/assignments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Assignment[] = await response.json();
        setAssignments(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAssignment({
      ...assignment,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assignment),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert(result.message);

      // Refresh the assignments list
      const updatedResponse = await fetch('/api/assignments');
      const updatedData: Assignment[] = await updatedResponse.json();
      setAssignments(updatedData);

      // Clear the form
      setAssignment({
        assignmentNumber: '',
        assignmentName: '',
        subjectCode: '',
        subjectTitle: '',
        assignmentGivenDate: '',
        dueDate: '',
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className='assignment_container'>
      <form onSubmit={handleSubmit} className='assignment_form'>
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
      {loading ? (
        <p>Loading assignments...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
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
      )}
    </div>
  );
};

export default FacultyAssignmentPage;


// 'use client';

// import React, { useState, useEffect } from 'react';
// import "./assignment.css";

// interface Assignment {
//   assignmentNumber: string;
//   assignmentName: string;
//   subjectCode: string;
//   subjectTitle: string;
//   assignmentGivenDate: string;
//   dueDate: string;
// }

// const FacultyAssignmentPage: React.FC = () => {
//   const [assignment, setAssignment] = useState<Assignment>({
//     assignmentNumber: '',
//     assignmentName: '',
//     subjectCode: '',
//     subjectTitle: '',
//     assignmentGivenDate: '',
//     dueDate: '',
//   });

//   const [assignments, setAssignments] = useState<Assignment[]>([]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setAssignment({
//       ...assignment,
//       [name]: value,
//     });
//   };

//   const fetchAssignments = async () => {
//     try {
//       const response = await fetch('/api/assignments', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setAssignments(data);
//       } else {
//         console.error('Failed to fetch assignments');
//       }
//     } catch (error) {
//       console.error('Error fetching assignments:', error);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/assignments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(assignment),
//       });

//       if (response.ok) {
//         const newAssignment = await response.json();
//         setAssignments([...assignments, newAssignment]);
//         setAssignment({
//           assignmentNumber: '',
//           assignmentName: '',
//           subjectCode: '',
//           subjectTitle: '',
//           assignmentGivenDate: '',
//           dueDate: '',
//         });
//       } else {
//         console.error('Failed to save assignment');
//       }
//     } catch (error) {
//       console.error('Error saving assignment:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAssignments();
//   }, []);

//   return (
//     <div>
//       <h1>Faculty Assignment Page</h1>
//       <form onSubmit={handleSubmit} className="assignment-form">
//         <input
//           type="text"
//           name="assignmentNumber"
//           placeholder="Assignment Number"
//           value={assignment.assignmentNumber}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="assignmentName"
//           placeholder="Assignment Name"
//           value={assignment.assignmentName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="subjectCode"
//           placeholder="Subject Code"
//           value={assignment.subjectCode}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="subjectTitle"
//           placeholder="Subject Title"
//           value={assignment.subjectTitle}
//           onChange={handleChange}
//         />
//         <input
//           type="date"
//           name="assignmentGivenDate"
//           value={assignment.assignmentGivenDate}
//           onChange={handleChange}
//         />
//         <input
//           type="date"
//           name="dueDate"
//           value={assignment.dueDate}
//           onChange={handleChange}
//         />
//         <button type="submit">Save Assignment</button>
//       </form>

//       <table className="assignment-table">
//         <thead>
//           <tr>
//             <th>Assignment Number</th>
//             <th>Assignment Name</th>
//             <th>Subject Code</th>
//             <th>Subject Title</th>
//             <th>Assignment Given Date</th>
//             <th>Due Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {assignments.map((assign, index) => (
//             <tr key={index}>
//               <td>{assign.assignmentNumber}</td>
//               <td>{assign.assignmentName}</td>
//               <td>{assign.subjectCode}</td>
//               <td>{assign.subjectTitle}</td>
//               <td>{assign.assignmentGivenDate}</td>
//               <td>{assign.dueDate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FacultyAssignmentPage;
