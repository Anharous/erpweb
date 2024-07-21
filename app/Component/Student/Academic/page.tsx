
import React from 'react';
import './academic.css'

const AcademicDetails = () => {
  return (
    <div className="academicContainer">
      <h1>Academic Details for Panimalar Engineering College</h1>
      <p>
        Panimalar Engineering College offers a comprehensive range of undergraduate and postgraduate programs in various engineering disciplines. The college is committed to providing high-quality education, fostering research and innovation, and preparing students for successful careers in engineering and technology.
      </p>

      <h2>Undergraduate Programs</h2>
      <table className="academicTable">
        <thead>
          <tr>
            <th>Department</th>
            <th>Duration</th>
            <th>Curriculum</th>
            <th>Key Labs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Computer Science and Engineering</td>
            <td>4 years</td>
            <td>
              Covers programming, data structures, algorithms, databases, computer networks, operating systems, software engineering, and artificial intelligence.
            </td>
            <td>Programming Lab, Database Lab, Networks Lab, AI Lab</td>
          </tr>
          <tr>
            <td>Electronics and Communication Engineering</td>
            <td>4 years</td>
            <td>
              Includes electronic circuits, digital signal processing, communication systems, microprocessors, VLSI design, and embedded systems.
            </td>
            <td>Electronics Lab, Communication Lab, DSP Lab, VLSI Lab</td>
          </tr>
          <tr>
            <td>Electrical and Electronics Engineering</td>
            <td>4 years</td>
            <td>
              Focuses on electrical circuits, control systems, power systems, renewable energy sources, and electrical machines.
            </td>
            <td>Electrical Machines Lab, Power Systems Lab, Control Systems Lab, Renewable Energy Lab</td>
          </tr>
          <tr>
            <td>Mechanical Engineering</td>
            <td>4 years</td>
            <td>
              Encompasses mechanics, thermodynamics, fluid mechanics, manufacturing processes, CAD/CAM, and robotics.
            </td>
            <td>Mechanics Lab, Thermodynamics Lab, Fluid Mechanics Lab, CAD/CAM Lab</td>
          </tr>
          <tr>
            <td>Civil Engineering</td>
            <td>4 years</td>
            <td>
              Covers structural engineering, geotechnical engineering, transportation engineering, environmental engineering, and construction management.
            </td>
            <td>Structural Lab, Geotechnical Lab, Transportation Lab, Environmental Lab</td>
          </tr>
        </tbody>
      </table>

      <h2>Postgraduate Programs</h2>
      <table className="academicTable">
        <thead>
          <tr>
            <th>Department</th>
            <th>Duration</th>
            <th>Curriculum</th>
            <th>Research Areas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Computer Science and Engineering</td>
            <td>2 years</td>
            <td>
              Advanced topics in computer science, including machine learning, big data analytics, network security, and cloud computing.
            </td>
            <td>Artificial Intelligence, Data Science, Cybersecurity</td>
          </tr>
          <tr>
            <td>Electronics and Communication Engineering</td>
            <td>2 years</td>
            <td>
              Advanced communication systems, wireless networks, optical communication, and signal processing.
            </td>
            <td>Wireless Communication, Signal Processing, Optical Networks</td>
          </tr>
        </tbody>
      </table>

      <h2>Research and Development</h2>
      <p>
        Panimalar Engineering College emphasizes research and development across all engineering disciplines. The college has state-of-the-art research facilities and encourages students and faculty to engage in innovative research projects.
      </p>
      <ul>
        <li><strong>Research Centers:</strong> The college has dedicated research centers for various fields such as AI, IoT, renewable energy, and advanced materials.</li>
        <li><strong>Collaborations:</strong> Partnerships with leading industries and academic institutions to promote collaborative research.</li>
        <li><strong>Publications:</strong> Faculty and students are encouraged to publish their research findings in reputed journals and conferences.</li>
      </ul>

      <h2>Facilities and Resources</h2>
      <ul>
        <li><strong>Laboratories:</strong> Equipped with modern equipment and software tools to support practical learning and research.</li>
        <li><strong>Computer Labs:</strong> High-performance computing facilities with the latest software for various engineering applications.</li>
        <li><strong>Library:</strong> A vast collection of books, journals, and digital resources to support the academic and research needs of students and faculty.</li>
        <li><strong>E-Resources:</strong> Access to online databases, e-books, and journals.</li>
        <li><strong>Industry Interaction:</strong> Opportunities for students to gain practical experience through internships with leading companies.</li>
        <li><strong>Workshops and Seminars:</strong> Regularly conducted to keep students updated with the latest industry trends and technologies.</li>
      </ul>
    </div>
  );
};

export default AcademicDetails;

