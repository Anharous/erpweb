'use client';
import "./student.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Academic from './Academic/page';
import Assignment from './Assignment/page';
import Attendance from "./Attendance/page";
import Document from './Document/page';
import Examination from './Examination/page';
import Communication from './Communication/page';
import Research from './Research/page'


interface Student {
    img: string;
    name: string;
    admission: string;
    rollNo: string;
    class: string;
    degree: string;
    department: string;
    course: string;
}

interface Students {
    [key: string]: Student;
}

const Page: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const buttonIds = [
            'btnnone',
            'btnntwo',
            'btnnthree',
            'btnnfour',
            'btnnfive',
            'btnnsix',
            'btnnseven',
            'btnneight',
            'btnnnine',
            'btnnten'
        ];

        const scrollToFormPage = () => {
            const formPage = document.getElementById('screeen')?.offsetTop;
            
            if (formPage !== undefined) {
                window.scrollTo({
                    top: formPage,
                    behavior: 'smooth'
                });
            }
        };

        const buttons = buttonIds.map(id => document.getElementById(id)).filter(button => button !== null);

        buttons.forEach(button => {
            button.addEventListener('click', scrollToFormPage);
        });

        // Clean up the event listeners when the component unmounts
        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', scrollToFormPage);
            });
        };
    }, []);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (!storedUsername) {
            router.push('/Component/Loginform');
        } else {
            setUsername(storedUsername);
        }
    }, [router]);

    const handleButtonClick = (component: string) => {
        setSelectedComponent(component);
    };

    const renderComponent = () => {
        if (selectedComponent === null) return null;

        switch (selectedComponent) {
            case 'Academic':
                return <Academic />;
            case 'Assignment':
                return <Assignment />;
            case 'Document':
                return <Document/>;
            case 'Examination':
                return <Examination />;
            case 'Attendance':
                return <Attendance />;
            case 'Communication':
                return <Communication />;
            case 'Research':
                return <Research />;
            default:
                return null;
        }
    };

    const students: Students = {
        '2022peccb101': {
            img:"/loginstudent.png",
            name: 'Abinaya K',
            admission: '12345678',
            rollNo: '2022peccb101',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb105': {
            img:"/loginstudent.png",
            name: 'AmirthaLakshmi',
            admission: '12345678',
            rollNo: '2022peccb105',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb114': {
            img:"/loginstudent.png",
            name: 'Dhanya Sri S',
            admission: '12345678',
            rollNo: '2022peccb114',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb117': {
            img:"/loginstudent.png",
            name: 'Gayathri S',
            admission: '12345678',
            rollNo: '2022peccb117',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb149': {
            img:"/loginstudent.png",
            name: 'Logeshwary',
            admission: '12345678',
            rollNo: '2022peccb149',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        }
    };

    // Get the student data based on the username (roll number)
    const studentData = username ? students[username.toLowerCase()] : null;

    // Helper function to determine which class to show
    const getStudentClass = (rollNo: string) => {
        switch (rollNo) {
            case '2022peccb101':
                return 'studentone';
            case '2022peccb105':
                return 'studenttwo';
            case '2022peccb114':
                return 'studentthree';
            case '2022peccb118':
                return 'studentfour';
            case '2022peccb149':
                return 'studentfive';
            default:
                return '';
        }
    };

    return (
        <div className="studentpage">
            <div className="header">
                <div className="logo">
                    <img src="/peclogo.png" alt="" />
                    <div className="logoname">
                    <p>PANIMALAR</p>
                    <p>ENGINEERING COLLEGE</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn" id="btnnone" onClick={() => handleButtonClick('Academic')}>Academic</button>
                    <button className="btn" id="btnntwo" onClick={() => handleButtonClick('Assignment')}>Assignment</button>
                    <button className="btn" id="btnnthree" onClick={() => handleButtonClick('Attendance')}>Attendance</button>
                    <button className="btn" id="btnnfour" onClick={() => handleButtonClick('Document')}>Document</button>
                    <button className="btn" id="btnnfive" onClick={() => handleButtonClick('Examination')}>Examination</button>
                    <button className="btn" id="btnnsix" onClick={() => handleButtonClick('Communication')}>Communication</button>
                    <button className="btn" id="btnnseven" onClick={() => handleButtonClick('Research')}>Research</button>
                </div>
            </div>
            {studentData ? (
                <div className={getStudentClass(studentData.rollNo)}>
                    <img src="" alt="" />
                    <div className="studentdetails">
                        <img className="student_img" src="/user.png" alt="studentlogo" />
                        <p>NAME: {studentData.name}</p>
                        <p>ADMISSION: {studentData.admission}</p>
                        <p>ROLLNO: {studentData.rollNo}</p>
                        <p>CLASS: {studentData.class}</p>
                        <p>DEGREE: {studentData.degree}</p>
                        <p>DEPARTMENT: {studentData.department}</p>
                        <p>COURSE: {studentData.course}</p>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
             <div className="line"></div>
            <div className="screen" id="screeen">
                {renderComponent()}
            </div>
        </div>
    );
};


export default Page;

