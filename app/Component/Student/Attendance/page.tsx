
import { useState, useEffect } from 'react';
import  './attendances.css';

interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent';
}

const StudentAttendance = () => {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    // Replace with your data fetching logic
    const fetchAttendanceData = async () => {
      const response = await fetch('/api/attendance'); // Example API endpoint
      const data = await response.json();
      setAttendanceData(data);
    };

    fetchAttendanceData();
  }, []);

  return (
    <div className="container">
      <h1>Attendance</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentAttendance;

    
