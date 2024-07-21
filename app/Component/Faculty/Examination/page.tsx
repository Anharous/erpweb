'use client'
import React, { useState } from 'react';
import "./examination.css"

interface Exam {
  examNumber: string;
  subjectCode: string;
  subjectName: string;
  examDate: string;
  examMode: 'AM' | 'PM';
}

const FacultyExamTimetable: React.FC = () => {
  const [examName, setExamName] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [exams, setExams] = useState<Exam[]>([]);
  const [newExam, setNewExam] = useState<Exam>({
    examNumber: '',
    subjectCode: '',
    subjectName: '',
    examDate: '',
    examMode: 'AM',
  });

  const addExam = () => {
    setExams([...exams, newExam]);
    setNewExam({
      examNumber: '',
      subjectCode: '',
      subjectName: '',
      examDate: '',
      examMode: 'AM',
    });
  };

  const deleteExam = (index: number) => {
    setExams(exams.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className='exam_container'>
      <h1>Faculty Exam Timetable Upload</h1>
      
      <div  className="select">
        <label>Exam Name: </label>
        <select value={examName} onChange={(e) => setExamName(e.target.value)}>
          <option value="SELECT">Select Exam</option>
          <option value="Internal 1">Internal 1</option>
          <option value="Internal 2">Internal 2</option>
          <option value="Semester">Semester</option>
        </select>

        <label>Semester: </label>
        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="">Select Semester</option>
          {[...Array(8)].map((_, i) => (
            <option key={i} value={`Semester ${i + 1}`}>
              Semester {i + 1}
            </option>
          ))}
        </select>

        <label>Department: </label>
        <input
          id='department'
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      </div>

      <h2>{examName} - {semester} - {department}</h2>

      <table border={1} className='exam_table'>
        <thead>
          <tr>
            <th>Exam Number</th>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Exam Date</th>
            <th>Exam Mode</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={index}>
              <td>{exam.examNumber}</td>
              <td>{exam.subjectCode}</td>
              <td>{exam.subjectName}</td>
              <td>{exam.examDate}</td>
              <td>{exam.examMode}</td>
              <td>
                <button onClick={() => deleteExam(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                value={newExam.examNumber}
                onChange={(e) => setNewExam({ ...newExam, examNumber: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                value={newExam.subjectCode}
                onChange={(e) => setNewExam({ ...newExam, subjectCode: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                value={newExam.subjectName}
                onChange={(e) => setNewExam({ ...newExam, subjectName: e.target.value })}
              />
            </td>
            <td>
              <input
                type="date"
                value={newExam.examDate}
                onChange={(e) => setNewExam({ ...newExam, examDate: e.target.value })}
              />
            </td>
            <td>
              <select
                value={newExam.examMode}
                onChange={(e) => setNewExam({ ...newExam, examMode: e.target.value as 'AM' | 'PM' })}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </td>
            <td>
              <button onClick={addExam}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FacultyExamTimetable;

