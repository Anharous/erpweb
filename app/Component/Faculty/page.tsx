'use client'
import './faculty.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Academic from './Academic/page'
import Assignment from './Assignment/page'
import Communication from './Communication/page'
import Document from './Document/page';
import Examination from './Examination/page'
import Report from './Report/page'

interface Faculty {
    name: string;
    department: string;
}

interface Faculties {
    [key: string]: Faculty;
}

const Page: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const router = useRouter();

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
                return <Document />;
            case 'Examination':
                return <Examination />;
            case 'Communication':
                return <Communication />;
            default:
                return null;
        }
    };
    return(
        <div>
            <div className="header">
                <div>
                <img src="" alt="" />
                <p>Panimalar</p>
                </div>
                <div>
                    <button>Academic</button>
                    <button>Attendance</button>
                    <button>Assignment</button>
                    <button>Document</button>
                    <button>Examination</button>
                    <button>Communication</button>
                    <button>Report</button>
                    <button>Research</button>
                    <button>Survey Form</button>
                </div>
            </div>
            <div>
                <img src="" alt="" />
                <p>Name:</p>
                <p>Department:</p>
            </div>
        </div>
    )
}
