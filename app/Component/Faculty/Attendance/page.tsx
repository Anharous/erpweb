// pages/attendance.tsx
'use client'
import Head from 'next/head';
import { useState } from 'react';
import "./attendance.css"

// Define the type for a student
interface Student {
  name: string;
  regNo: string;
}

// Define the type for attendance data
interface AttendanceData extends Student {
  department: string;
  date: string;
  attendance: string;
  reason: string;
}

const Attendance = () => {
  const [department, setDepartment] = useState<string>('');
  const [classYear, setClassYear] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  
  const students: Student[] = [
    { name: 'Abinaya k', regNo: '2022PECCB101' },
    { name: 'Abinaya S', regNo: '2022PECCB102' },
    { name: 'Abinaya Sree S', regNo: '2022PECCB103' },
    { name: 'Srinithi R', regNo: '2022PECCB104' },
    { name: 'AmirthaLakshmi S V', regNo: '2022PECCB105' },
    { name: 'Akshaya M', regNo: '2022PECCB106' },
    { name: 'Akshitha S', regNo: '2022PECCB107' },
    { name: 'Annie R', regNo: '2022PECCB108' },
    { name: 'Anugragha R', regNo: '2022PECCB109' },
    { name: 'Ashwini S', regNo: '2022PECCB110' },
  ];

  const generateAttendanceTable = () => {
    if (!department || !classYear || !section || !date) {
      alert('Please fill all the fields.');
      return;
    }

    const tableData: AttendanceData[] = students.map((student) => ({
      ...student,
      department,
      date,
      attendance: '',
      reason: ''
    }));
    setAttendanceData(tableData);
  };

  const handleAttendanceChange = (index: number, value: string) => {
    const updatedData = [...attendanceData];
    updatedData[index].attendance = value;
    setAttendanceData(updatedData);
  };

  const handleReasonChange = (index: number, value: string) => {
    const updatedData = [...attendanceData];
    updatedData[index].reason = value;
    setAttendanceData(updatedData);
  };

  const submitAttendance = () => {
    console.log(attendanceData);
    alert('Attendance submitted! Check the console for details.');
  };

  return (
    <>
      <Head>
        <title>Attendance Management System</title>
      </Head>
      <div className="attendance_container">
        <div className='atten_formcontainer'>
        <h2 className="text-center">ATTENDANCE MANAGEMENT</h2>
        <form className='attendance_form'>
          <div className="atten_form-group">
            <label htmlFor="department">Department</label>
            <select id="atten_department" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} required>
              <option selected disabled value="">Choose...</option>        
              <option value="AI&DS">AI&DS</option>
              <option value="AI&ML">AI&ML</option>
              <option value="CSBS">CSBS</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="IT">IT</option>
            </select>
          </div>
          <div className="atten_form-group">
            <label htmlFor="class">Year</label>
            <select className="form-control" value={classYear} onChange={(e) => setClassYear(e.target.value)} required>
              <option selected disabled value="">Choose...</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>
          <div className="atten_form-group">
            <label htmlFor="section">Section</label>
            <select id="section" className="form-control" value={section} onChange={(e) => setSection(e.target.value)} required>
              <option selected disabled value="">Choose...</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
          </div>
          <div className="atten_form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <button type="button" className="btn btn-primary" onClick={generateAttendanceTable}>Go for Attendance</button>
        </form>
        </div>
        {attendanceData.length > 0 && (
          <div className="attendance-table-mt-4">
            <table className="table table-bordered" border={1}>
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Reg No</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>OD Internal</th>
                  <th>OD External</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.regNo}</td>
                    <td>{student.department}</td>
                    <td>{student.date}</td>
                    <td><input type="radio" name={`attendance-${index}`} value="Present" onChange={(e) => handleAttendanceChange(index, e.target.value)} /></td>
                    <td><input type="radio" name={`attendance-${index}`} value="Absent" onChange={(e) => handleAttendanceChange(index, e.target.value)} /></td>
                    <td><input type="radio" name={`attendance-${index}`} value="OD Internal" onChange={(e) => handleAttendanceChange(index, e.target.value)} /></td>
                    <td><input type="radio" name={`attendance-${index}`} value="OD External" onChange={(e) => handleAttendanceChange(index, e.target.value)} /></td>
                    <td><input type="text" className="form-control" value={student.reason} onChange={(e) => handleReasonChange(index, e.target.value)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn_btn-primary" onClick={submitAttendance}>Submit Attendance</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Attendance;
