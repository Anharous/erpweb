import "./faculty.css"
import React from 'react';
import Link from "next/link";

interface Faculty {
  serialNumber: number;
  name: string;
  designation: string;
  email: string;
}

const facultyList: Faculty[] = [
  { serialNumber: 1, name: 'Dr. Alice Johnson', designation: 'Professor', email: 'alice.johnson@example.com' },
  { serialNumber: 2, name: 'Dr. Bob Smith', designation: 'Associate Professor', email: 'bob.smith@example.com' },
  { serialNumber: 3, name: 'Dr. Carol Davis', designation: 'Assistant Professor', email: 'carol.davis@example.com' },
  { serialNumber: 4, name: 'Dr. David Lee', designation: 'Lecturer', email: 'david.lee@example.com' },
  { serialNumber: 5, name: 'Dr. Emma Wilson', designation: 'Professor', email: 'emma.wilson@example.com' },
  { serialNumber: 6, name: 'Dr. Frank Brown', designation: 'Associate Professor', email: 'frank.brown@example.com' },
  { serialNumber: 7, name: 'Dr. Grace Taylor', designation: 'Assistant Professor', email: 'grace.taylor@example.com' },
  { serialNumber: 8, name: 'Dr. Henry Martinez', designation: 'Lecturer', email: 'henry.martinez@example.com' },
  { serialNumber: 9, name: 'Dr. Isabella Anderson', designation: 'Professor', email: 'isabella.anderson@example.com' },
  { serialNumber: 10, name: 'Dr. James Thomas', designation: 'Associate Professor', email: 'james.thomas@example.com' },
];

const FacultyDetails: React.FC = () => {
  return (
    <div className="faculty_hod">
      <h2>Department of Computer Science And Business System</h2>
      <table border={1} className="faculty_hod_table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Faculty Name</th>
            <th>Designation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((faculty) => (
            <tr key={faculty.serialNumber}>
              <td>{faculty.serialNumber}</td>
              <td>{faculty.name}</td>
              <td>{faculty.designation}</td>
              <td>{faculty.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/Component/Faculty">
      <button className="navigate">Navigate to Faculty Module</button>
      </Link>
    </div>
  );
};

export default FacultyDetails;
