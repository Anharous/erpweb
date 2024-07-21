import "./research.css"

export default function page(){
    return(
        <div className="research_container">
        <h1>Research Module</h1>

        <div className="research_section">
            <h2 className="section-title">Research Activities and Details</h2>
            <p>Details about various research activities go here. This section can include information about ongoing projects, collaborations, and achievements.</p>
        </div>

        <div className="research_section">
            <h2 className="section-title">Student Analysis</h2>
            <div className="faculty-analysis">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Research Area</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ChatBot</td>
                            <td>Artificial Intelligence</td>
                            <td>04-07-2023</td>
                        </tr>
                        <tr>
                            <td>StockPrice Prediction</td>
                            <td>Machine Learning</td>
                            <td>13-02-2024</td>
                        </tr>
                        <tr>
                            <td>Customer segmentation</td>
                            <td>Data Science</td>
                            <td>12-5-2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}