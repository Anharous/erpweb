import Image from "next/image";
import  "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="login_header">
        <img src="/peclogo.png" alt="logo" />
        <div className="home_logo">
        <h2>PANIMALAR</h2>
        <p>ENGINEERING COLLEGE</p>
        <p>An Autonomous institute</p>
        <p>Affilated to Anna Univercity, chennai</p>
        <p>(JAISAKTHI EDUCATIONAL TRUST)</p>
        </div>
      </div>
      <div className="login_modules">
        <div className="module_student">
        <Link href='/Component/Student/Loginform'>
          <img className="img" src="/loginstudent.png" alt="student" />
          <p>Student</p></Link>
        </div>
        <div className="empty"></div>
        <div className="pair_module">
          <div className="module">
          <Link href='/Component/Hod/Loginform'>
            <img className="img" src="/loginhod.png" alt="hod" />
            <p>HOD</p></Link>
          </div>
          <div className="emptytwo"></div>
          <div className="login">
            <p>LogIn</p>
          </div>
          <div className="emptythree"></div>
          <div className="module">
          <Link href='/Component/Faculty/Loginform'>
            <img className="img" src="/loginfaculty.png" alt="faculty" />
            <p>Faculty</p></Link>
          </div>
        </div>
        

      </div>
    </div>
  );
}
