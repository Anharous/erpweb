export default function page(){
    return(
        <div className="container">
        <h1>Attendance Report</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Attendance Percentage</th>
                    <th>Send Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>85%</td>
                    <td><button>Send Email</button></td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>90%</td>
                    <td><button>Send Email</button></td>
                </tr>
                <tr>
                    <td>Mark Johnson</td>
                    <td>78%</td>
                    <td><button>Send Email</button></td>
                </tr>
            </tbody>
        </table>
    </div>

    )
}