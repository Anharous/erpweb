'use client';
import "./faculty.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Academic from './Academic/page';
import Attendance from './Attendance/page';
import Assignment from './Assignment/page';
import Documents from './Document/page';
import Examination from './Examination/page';
import Communication from './Communication/page';
import Report from './Report/page';
import Research from './Research/page';
import Survey from './Survey/page';

interface Faculty {
    name: string;
    // admission: string;
    rollNo: string;
    // class: string;
    // degree: string;
    department: string;
    // course: string;
}

interface Faculties {
    [key: string]: Faculty; // Index signature to allow dynamic keys
}

const Page: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const buttonIds = [
            'btnone',
            'btntwo',
            'btnthree',
            'btnfour',
            'btnfive',
            'btnsix',
            'btnseven',
            'btneight',
            'btnnine',
            'btnten'
        ];

        const scrollToFormPage = () => {
            const formPage = document.getElementById('screenn')?.offsetTop;
            
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
            router.push('/Faculty/Loginform');
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
            case 'Attendance':
                return <Attendance />;
            case 'Assignment':
                return <Assignment />;
            case 'Documents':
                return <Documents />;
            case 'Examination':
                return <Examination />;
            case 'Communication':
                return <Communication />;
            case 'Report':
                return <Report />;
            case 'Research':
                return <Research />;
            case 'Survey':
                return <Survey />;
            default:
                return null;
        }
    };


    // Define the faculties object with a proper type
    const faculties: Faculties = {
        'csbs101': {
            name: 'Faculty Member 1',
            // admission: '12345678',
             rollNo: 'csbs101',
            // class: 'Class 1',
            // degree: 'Post Graduate',
            department: 'Department of Computer Science and Business System',
            // course: 'M.Tech Computer Science and Business System'
        },
        'csbs102': {
            name: 'Faculty Member 2',
            // admission: '12345678',
            rollNo: 'csbs102',
            // class: 'Class 2',
            // degree: 'Post Graduate',
            department: 'Department of Computer Science and Business System',
            // course: 'M.Tech Computer Science and Business System'
        }
    };


    const facultyData = username ? faculties[username.toLowerCase()] : null;

    // Helper function to determine which class to show
    const getFacultyClass = (rollNo: string) => {
        switch (rollNo) {
            case 'csbs101':
                return 'facultyone';
            case 'csbs102':
                return 'facultytwo';
            default:
                return '';
        }
    };

    return (
        <div className="facultypage">
            <div className="header">
                <div className="logo">
                    <img src="/peclogo.png" alt="PEC Logo" />
                    <div className="logo_para">
                    <p>PANIMALAR</p>
                    <p>ENGINEERING COLLEGE</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn" id="btnone" onClick={() => handleButtonClick('Academic')}>Academic</button>
                    <button className="btn" id="btntwo" onClick={() => handleButtonClick('Attendance')}>Attendance</button>
                    <button className="btn" id="btnthree" onClick={() => handleButtonClick('Assignment')}>Assignment</button>
                    <button className="btn" id="btnfour" onClick={() => handleButtonClick('Documents')}>Documents</button>
                    <button className="btn" id="btnfive" onClick={() => handleButtonClick('Examination')}>Examination</button>
                    <button className="btn" id="btnsix" onClick={() => handleButtonClick('Communication')}>Communication</button>
                    <button className="btn" id="seven" onClick={() => handleButtonClick('Report')}>Report</button>
                    <button className="btn" id="eight" onClick={() => handleButtonClick('Research')}>Research</button>
                    <button className="btn" id="nine" onClick={() => handleButtonClick('Survey')}>Survey</button>
                </div>
            </div>
            {facultyData ? (
                <div className={getFacultyClass(facultyData.rollNo)}>
                    <img src="" alt="" />
                    <div className="faculty_home">
                        <p>Welcome!!</p>
                        <p>NAME: {facultyData.name}</p>
                        {/* <p>ADMISSION: {facultyData.admission}</p> */}
                        {/* <p>ROLLNO: {facultyData.rollNo}</p> */}
                        {/* <p>CLASS: {facultyData.class}</p> */}
                        {/* <p>DEGREE: {facultyData.degree}</p> */}
                        <p>DEPARTMENT: {facultyData.department}</p>
                        {/* <p>COURSE: {facultyData.course}</p> */}
                    </div>
                </div>
            ) : (
                <p></p>
            )}
            <div className="screen" id="screenn">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Page;
