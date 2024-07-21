// pages/student/documents.tsx
'use client'
import { useState, useEffect } from 'react';

interface Document {
  id: number;
  name: string;
  url: string;
}

const StudentDocumentsPage = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  // Simulate fetching documents from a server
  useEffect(() => {
    // Example data
    const fetchedDocuments: Document[] = [
      { id: 1, name: 'Document1.pdf', url: '/documents/Document1.pdf' },
      { id: 2, name: 'Document2.pdf', url: '/documents/Document2.pdf' },
      { id: 3, name: 'Document3.pdf', url: '/documents/Document3.pdf' },
    ];
    setDocuments(fetchedDocuments);
  }, []);

  return (
    <div className="document_container">
      <h1>Student Document Module</h1>
      <table className="document_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td>{document.id}</td>
              <td>{document.name}</td>
              <td>
                <a href={document.url} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDocumentsPage;

