'use client'
import React, { useState, useEffect } from 'react';
import "./examination.css";

// Define the Exam interface
interface Exam {
  id: number;
  examNumber: string;
  subjectCode: string;
  subjectName: string;
  examDate: string;
  examMode: string;
}

// Define the ExamResult interface
interface ExamResult {
  id: number;
  subjectCode: string;
  subjectName: string;
  grade: string;
  result: string;
}

// Define a type for the grade points
type GradePoints = {
  [key: string]: number;
};

const StudentExamModule: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [results, setResults] = useState<ExamResult[]>([]);
  const [view, setView] = useState<'exams' | 'results'>('exams'); // State for table visibility

  useEffect(() => {
    // Mock API call to fetch exams data from the backend
    const fetchExams = async () => {
      const examData: Exam[] = [
        { id: 1, examNumber: '1', subjectCode: '21CB1501', subjectName: 'Statistical computing with R', examDate: '2024-08-01', examMode: 'AM' },
        { id: 2, examNumber: '2', subjectCode: '21CB1502', subjectName: 'Software Design with UML', examDate: '2024-08-03', examMode: 'PM' },
        { id: 3, examNumber: '3', subjectCode: '21CB1503', subjectName: 'Fundamentals of Management', examDate: '2024-08-05', examMode: 'AM' },
        { id: 4, examNumber: '4', subjectCode: '21MA1515', subjectName: 'Operations Research', examDate: '2024-08-07', examMode: 'PM' },
      ];
      setExams(examData);
    };

    // Mock API call to fetch exam results data from the backend
    const fetchResults = async () => {
      const resultData: ExamResult[] = [
        { id: 1, subjectCode: '21CB1501', subjectName: 'Statistical computing with R', grade: 'A+', result: 'Pass' },
        { id: 2, subjectCode: '21CB1502', subjectName: 'Software Design with UML', grade: 'A', result: 'Pass' },
        { id: 3, subjectCode: '21CB1503', subjectName: 'Fundamentals of Management', grade: 'B+', result: 'Pass' },
        { id: 4, subjectCode: '21MA1515', subjectName: 'Operations Research', grade: 'A+', result: 'Pass' },
        { id: 5, subjectCode: '21CB1504', subjectName: 'Data Structures', grade: 'B', result: 'Pass' },
        { id: 6, subjectCode: '21CB1505', subjectName: 'Database Management Systems', grade: 'A', result: 'Pass' },
      ];
      setResults(resultData);
    };

    fetchExams();
    fetchResults();
  }, []);

  // Function to calculate CGPA
  const calculateCGPA = (): number => {
    const gradePoints: GradePoints = {
      'A+': 8.0,
      'A': 7.7,
      'B+': 6.3,
      'B': 6.0,
      'C+': 5.7,
      'C': 5.3,
      'D': 5.0,
      'F': 4.0,
    };

    const totalPoints = results.reduce((acc, result) => acc + gradePoints[result.grade], 0);
    const cgpa = totalPoints / results.length;
    return parseFloat(cgpa.toFixed(2));
  };

  return (
    <div className="examModule">
      <h2>Student Exam Module</h2>
      <div className="buttonContainer">
        <button onClick={() => setView('exams')} className={view === 'exams' ? 'active' : ''}>
          View Exams
        </button>
        <button onClick={() => setView('results')} className={view === 'results' ? 'active' : ''}>
          View Results
        </button>
      </div>
      {view === 'exams' ? (
        <div>
          <h3>Upcoming Exams</h3>
          <table className="examTable">
            <thead>
              <tr>
                <th>Exam Number</th>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Exam Date</th>
                <th>Exam Mode</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam) => (
                <tr key={exam.id}>
                  <td>{exam.examNumber}</td>
                  <td>{exam.subjectCode}</td>
                  <td>{exam.subjectName}</td>
                  <td>{exam.examDate}</td>
                  <td>{exam.examMode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h3>Exam Results</h3>
          <table className="resultTable">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Grade</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.id}>
                  <td>{result.subjectCode}</td>
                  <td>{result.subjectName}</td>
                  <td>{result.grade}</td>
                  <td>{result.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cgpaContainer">
            <strong>CGPA:</strong> {calculateCGPA()}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentExamModule;
