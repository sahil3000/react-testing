import React from "react";

export const Application:React.FC = () => {
    return <form>
        <h1>Job Form</h1>
        <h2>Section 1</h2>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
        </div>

        <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" />
        </div>

        <div>
            <label htmlFor="job-location">Job Location</label>
            <select  id="job-location">
                <option value="">Select a country</option>
                <option value="IN">India</option>
                <option value="US">USA</option>
                <option value="CA">Canada</option>
                <option value="GB">UK</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id="terms" />I agree to the terms and conditions
            </label>
        </div>
        <button>Submit</button>
    </form>
}