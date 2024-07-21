import React from 'react';

interface Document {
  id: number;
  name: string;
  url: string;
}

const StudentDocuments: React.FC<{ documents: Document[] }> = ({ documents }) => {
  return (
    <div className="container">
      <h1>Available Documents</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>
                <a href={doc.url} download>
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

export default StudentDocuments;