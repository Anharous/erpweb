'use client'
import React, { useState } from 'react';
import "./document.css"

interface Document {
  id: number;
  subjectCode: string;
  subjectName: string;
  name: string;
  url: string;
}

const FacultyDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [subjectCode, setSubjectCode] = useState('');
  const [subjectName, setSubjectName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile && subjectCode && subjectName) {
      const newDocument: Document = {
        id: documents.length + 1,
        subjectCode,
        subjectName,
        name: selectedFile.name,
        url: URL.createObjectURL(selectedFile),
      };
      setDocuments([...documents, newDocument]);
      setSelectedFile(null);
      setSubjectCode('');
      setSubjectName('');
    } else {
      alert('Please fill in all fields and select a file.');
    }
  };

  const handleDelete = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className='document_container'>
    <div className="faculty-container">
      <h1>Upload Document</h1>
      <input
        type="text"
        placeholder="Subject Code"
        value={subjectCode}
        onChange={(e) => setSubjectCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject Name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      </div>

      <h1>Uploaded Documents</h1>
      <table border={1} className='document_table'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Document Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={doc.id}>
              <td>{index + 1}</td>
              <td>{doc.subjectCode}</td>
              <td>{doc.subjectName}</td>
              <td>{doc.name}</td>
              <td>
                <button onClick={() => handleDelete(doc.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyDocuments;
