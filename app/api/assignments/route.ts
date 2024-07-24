// app/api/assignments/route.ts

import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

interface Assignment {
  assignmentNumber: string;
  assignmentName: string;
  subjectCode: string;
  subjectTitle: string;
  assignmentGivenDate: string;
  dueDate: string;
}

// Handle POST requests to insert data
export async function POST(request: Request) {
  try {
    const {
      assignmentNumber,
      assignmentName,
      subjectCode,
      subjectTitle,
      assignmentGivenDate,
      dueDate,
    }: Assignment = await request.json();

    console.log('Received Data:', {
      assignmentNumber,
      assignmentName,
      subjectCode,
      subjectTitle,
      assignmentGivenDate,
      dueDate,
    });

    const [result] = await pool.query(
      'INSERT INTO assignments (assignmentNumber, assignmentName, subjectCode, subjectTitle, assignmentGivenDate, dueDate) VALUES (?, ?, ?, ?, ?, ?)',
      [
        assignmentNumber,
        assignmentName,
        subjectCode,
        subjectTitle,
        assignmentGivenDate,
        dueDate,
      ]
    );

    console.log('Insert Result:', result);

    return NextResponse.json(
      { message: 'Assignment saved successfully!', result },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error saving assignment:', error); // Log the error to the console
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle GET requests to fetch data
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM assignments');
    console.log('Fetched Assignments:', rows);

    return NextResponse.json(rows, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching assignments:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// // app/api/assignments/route.ts

// import { NextResponse } from 'next/server';
// import pool from '../../../lib/db'; // Adjust the path based on your folder structure

// interface Assignment {
//   assignmentNumber: string;
//   assignmentName: string;
//   subjectCode: string;
//   subjectTitle: string;
//   assignmentGivenDate: string;
//   dueDate: string;
// }

// // POST method for creating assignments
// export async function POST(request: Request) {
//   try {
//     // Parse incoming JSON request body
//     const {
//       assignmentNumber,
//       assignmentName,
//       subjectCode,
//       subjectTitle,
//       assignmentGivenDate,
//       dueDate,
//     }: Assignment = await request.json();

//     // Check if all required fields are present
//     if (
//       !assignmentNumber ||
//       !assignmentName ||
//       !subjectCode ||
//       !subjectTitle ||
//       !assignmentGivenDate ||
//       !dueDate
//     ) {
//       return NextResponse.json(
//         { error: 'All fields are required.' },
//         { status: 400 }
//       );
//     }

//     // Use MySQL pool to execute the INSERT query
//     const [result] = await pool.query(
//       'INSERT INTO assignments (assignmentNumber, assignmentName, subjectCode, subjectTitle, assignmentGivenDate, dueDate) VALUES (?, ?, ?, ?, ?, ?)',
//       [
//         assignmentNumber,
//         assignmentName,
//         subjectCode,
//         subjectTitle,
//         assignmentGivenDate,
//         dueDate,
//       ]
//     );

//     return NextResponse.json(
//       { message: 'Assignment saved successfully!', result },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     console.error('Error saving assignment:', error); // Log the error to the console
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // GET method for retrieving assignments
// export async function GET() {
//   try {
//     // Query the database for all assignments
//     const [rows] = await pool.query('SELECT * FROM assignments');
//     return NextResponse.json(rows, { status: 200 });
//   } catch (error: any) {
//     console.error('Error fetching assignments:', error); // Log the error to the console
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
