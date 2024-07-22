// pages/attendance.tsx
'use client'
import React from 'react';
import { NextPage } from 'next';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register ChartJS components
// ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface AttendanceProps {
  studentName: string;
  totalWorkingDays: number;
  daysAbsent: number;
}

function Attendance({ studentName, totalWorkingDays, daysAbsent }: AttendanceProps) {
  const daysPresent = totalWorkingDays - daysAbsent;
  const attendancePercentage = ((daysPresent / totalWorkingDays) * 100).toFixed(2);

  const data = {
    labels: ['Absent', 'Present'],
    datasets: [
      {
        data: [daysAbsent, daysPresent],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Attendance Report for {studentName}</h1>
      <table>
        <thead>
          <tr>
            <th>Total Working Days</th>
            <th>Days Absent</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalWorkingDays}</td>
            <td>{daysAbsent}</td>
            <td>{attendancePercentage}%</td>
          </tr>
        </tbody>
      </table>
      <div style={{ width: '50%', margin: '0 auto' }}>
        {/* <Pie data={data} /> */}
      </div>
    </div>
  );
}

const AttendancePage: NextPage = () => {
  // Sample data; replace with actual data as needed
  const studentData = {
    studentName: 'Semarter 1',
    totalWorkingDays: 90,
    daysAbsent: 15,
  };

  return (
    <div>
      <Attendance
        studentName={studentData.studentName}
        totalWorkingDays={studentData.totalWorkingDays}
        daysAbsent={studentData.daysAbsent}
      />
    </div>
  );
};

export default AttendancePage;

    
