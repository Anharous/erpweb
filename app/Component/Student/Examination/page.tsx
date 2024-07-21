import React, { useState, useEffect } from 'react';
import "./examination.css"

interface Exam {
  id: number;
  examNumber: string;
  subjectCode: string;
  subjectName: string;
  examDate: string;
  examMode: string;
}

const StudentExamModule: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    // Mock API call to fetch exams data from the backend
    const fetchExams = async () => {
      const data: Exam[] = [
        { id: 1, examNumber: 'E101', subjectCode: 'MATH101', subjectName: 'Mathematics', examDate: '2024-08-01', examMode: 'AM' },
        { id: 2, examNumber: 'E102', subjectCode: 'PHYS101', subjectName: 'Physics', examDate: '2024-08-03', examMode: 'PM' },
        { id: 3, examNumber: 'E103', subjectCode: 'CHEM101', subjectName: 'Chemistry', examDate: '2024-08-05', examMode: 'AM' },
        { id: 4, examNumber: 'E104', subjectCode: 'BIO101', subjectName: 'Biology', examDate: '2024-08-07', examMode: 'PM' },
      ];
      setExams(data);
    };

    fetchExams();
  }, []);

  return (
    <div className="examModule">
      <h2>Student Exam Module</h2>
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
  );
};

export default StudentExamModule;