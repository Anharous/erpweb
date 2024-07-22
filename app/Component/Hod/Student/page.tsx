// StudentDetails.tsx
'use client'
import React, { useState } from 'react';
import './student.css'
import Link from 'next/link';

interface Student {
  id: number;
  name: string;
  rollNumber: string;
  email: string;
}

interface ClassDetails {
  className: string;
  students: Student[];
}

const classList: ClassDetails[] = [
  { className: 'CSBS A II year', students: generateStudents('CSBS A II year', 5) },
  { className: 'CSBS B II year', students: generateStudents('CSBS B II year', 5) },
  { className: 'CSBS C II year', students: generateStudents('CSBS C II year', 5) },
  { className: 'CSBS D II year', students: generateStudents('CSBS D II year', 5) },
  { className: 'CSBS A III year', students: generateStudents('CSBS A III year', 5) },
  { className: 'CSBS B III year', students: generateStudents('CSBS B III year', 5) },
  { className: 'CSBS C III year', students: generateStudents('CSBS C III year', 5) },
  { className: 'CSBS D III year', students: generateStudents('CSBS D III year', 5) },
  { className: 'CSBS A IV year', students: generateStudents('CSBS A IV year', 5) },
  { className: 'CSBS B IV year', students: generateStudents('CSBS B IV year', 5) },
];

function generateStudents(className: string, count: number): Student[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Student ${index + 1}`,
    rollNumber: `${className.substring(0, 5).toLowerCase()}${index + 1}`,
    email: `student${index + 1}@example.com`,
  }));
}

const StudentDetails: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<ClassDetails | null>(null);

  return (
    <div className='student_hod'>
      <h2>Student Details</h2>
      <table border={1} className='student_hod_table'>
        <thead>
          <tr>
            <th>Class</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {classList.map((classItem) => (
            <tr
              key={classItem.className}
              onClick={() => setSelectedClass(classItem)}
              style={{ cursor: 'pointer' }}
            >
              <td>{classItem.className}</td>
              <td>{classItem.className.split(' ')[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedClass && (
        <div>
          <h3>Students in {selectedClass.className}</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.rollNumber}</td>
                  <td>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link href="/Component/Student">
      <button className="navigate">Navigate to Student Module</button>
      </Link>
    </div>
  );
};

export default StudentDetails;
