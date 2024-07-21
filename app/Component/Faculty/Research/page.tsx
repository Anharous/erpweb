import "./research.css"

export default function page(){
    return(
        <div className="research_container">
        <h1>Research Module</h1>

        <div className="section">
            <h2 className="section-title">Research Activities and Details</h2>
            <p>Details about various research activities go here. This section can include information about ongoing projects, collaborations, and achievements.</p>
        </div>

        <div className="section">
            <h2 className="section-title">Faculty Analysis</h2>
            <div className="faculty-analysis">
                <table>
                    <thead>
                        <tr>
                            <th>Faculty Name</th>
                            <th>Research Area</th>
                            <th>Publications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dr. John Doe</td>
                            <td>Artificial Intelligence</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Dr. Jane Smith</td>
                            <td>Machine Learning</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Dr. Mark Johnson</td>
                            <td>Data Science</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}