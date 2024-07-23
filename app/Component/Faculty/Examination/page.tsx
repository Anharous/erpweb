'use client';

import React, { useState } from 'react';
import "./examination.css";

interface Exam {
  examNumber: string;
  subjectCode: string;
  subjectName: string;
  examDate: string;
  examMode: 'AM' | 'PM';
}

interface ExamResult {
  subjectCode: string;
  subjectName: string;
  grade: string;
  result: 'Pass' | 'Fail';
}

const FacultyExamModule: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<'Timetable' | 'Results'>('Timetable');

  return (
    <div>
      <div className='contain'>
      <h1>Faculty Exam Module</h1>
      <div className="button-container">
        <button onClick={() => setSelectedModule('Timetable')}>Upload Exam Timetable</button>
        <button onClick={() => setSelectedModule('Results')}>Upload Exam Results</button>
      </div>
      </div>
      {selectedModule === 'Timetable' ? <FacultyExamTimetable /> : <FacultyExamResults />}
    </div>
  );
};

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
    if (!newExam.examNumber || !newExam.subjectCode || !newExam.subjectName || !newExam.examDate) {
      alert("Please fill in all the fields.");
      return;
    }
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
        <h2>Faculty Exam Timetable Upload</h2>

        <div className="select">
          <label>Exam Name: </label>
          <select value={examName} onChange={(e) => setExamName(e.target.value)}>
            <option value="">Select Exam</option>
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
                placeholder="Exam Number"
                value={newExam.examNumber}
                onChange={(e) => setNewExam({ ...newExam, examNumber: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Subject Code"
                value={newExam.subjectCode}
                onChange={(e) => setNewExam({ ...newExam, subjectCode: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Subject Name"
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

const FacultyExamResults: React.FC = () => {
  const [semester, setSemester] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  const [newExamResult, setNewExamResult] = useState<ExamResult>({
    subjectCode: '',
    subjectName: '',
    grade: '',
    result: 'Pass',
  });

  const addExamResult = () => {
    if (!newExamResult.subjectCode || !newExamResult.subjectName || !newExamResult.grade) {
      alert("Please fill in all the fields.");
      return;
    }
    setExamResults([...examResults, newExamResult]);
    setNewExamResult({
      subjectCode: '',
      subjectName: '',
      grade: '',
      result: 'Pass',
    });
  };

  const deleteExamResult = (index: number) => {
    setExamResults(examResults.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className='result_container'>
        <h2>Faculty Exam Results Upload</h2>

        <div className="select">
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

      <h2>{semester} - {department}</h2>

      <table border={1} className='result_table'>
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Grade</th>
            <th>Result</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {examResults.map((result, index) => (
            <tr key={index}>
              <td>{result.subjectCode}</td>
              <td>{result.subjectName}</td>
              <td>{result.grade}</td>
              <td>{result.result}</td>
              <td>
                <button onClick={() => deleteExamResult(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Subject Code"
                value={newExamResult.subjectCode}
                onChange={(e) => setNewExamResult({ ...newExamResult, subjectCode: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Subject Name"
                value={newExamResult.subjectName}
                onChange={(e) => setNewExamResult({ ...newExamResult, subjectName: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Grade"
                value={newExamResult.grade}
                onChange={(e) => setNewExamResult({ ...newExamResult, grade: e.target.value })}
              />
            </td>
            <td>
              <select
                value={newExamResult.result}
                onChange={(e) => setNewExamResult({ ...newExamResult, result: e.target.value as 'Pass' | 'Fail' })}
              >
                <option value="Pass">Pass</option>
                <option value="Fail">Fail</option>
              </select>
            </td>
            <td>
              <button onClick={addExamResult}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FacultyExamModule;
