import "./survey.css"

export default function page(){
    return(
        <div className="survey_container">
        <h1>Survey Form</h1>
        <form action="/submit-survey" method="post">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>

            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required/>
            </div>

            <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="rating">How much do you like to rate?</label>
                <select id="rating" name="rating" required>
                    <option value="">Select...</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐">⭐</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="feedback">Feedback/Suggestions:</label>
                <textarea id="feedback" name="feedback" rows={4} required></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
    )
}