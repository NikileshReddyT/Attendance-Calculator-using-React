import React, { useState } from 'react';
import '../ltps.css';
import logo from '../images/changed2.svg';
import { useNavigate } from 'react-router-dom';

export default function AttendanceCalculator() {
    const navigate = useNavigate();
    // Initial weights for LTPS
    const weights = {
        lecture: 100,
        tutorial: 100,
        practical: 50,
        skill: 25,
    };

    const [inputs, setInputs] = useState({
        lecture: '',
        tutorial: '',
        practical: '',
        skill: '',
    });

    const [attendancePercentage, setAttendancePercentage] = useState(null); // Initially null
    const [errorMessage, setErrorMessage] = useState('');

    // Handle input changes using dynamic keys for LTPS categories
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const calculateTotal = () => {
        let totalScore = 0;
        let totalWeight = 0;

        // Reset attendance and error message on each submit
        setAttendancePercentage(null);
        setErrorMessage('');

        for (const [key, weight] of Object.entries(weights)) {
            const value = inputs[key];

            if (value !== '') {
                const parsedValue = parseInt(value);
                if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 100) {
                    setErrorMessage(`Please enter a valid number between 1 and 100 for ${key} component.`);
                    return;
                }
                totalScore += parsedValue * (weight / 100);
                totalWeight += weight;
            }
        }

        if (totalWeight === 0) {
            setErrorMessage('At least one Percentage value should be provided.');
            return;
        }

        const calculatedAttendancePercentage = (totalScore / totalWeight) * 100;
        setAttendancePercentage(calculatedAttendancePercentage.toFixed(2));
    };

    return (
        <div className="container">
            <div className="logo-container" onClick={()=>{navigate("/")}}>
                <img src={logo} alt="Attendance Calculator Logo" className="logo" />
            </div>

            <div className="ltps-main">
            {['lecture', 'tutorial', 'practical', 'skill'].map((field) => (
                <div key={field} className='ltps-class'>
                    <label className="form-label">{field} Percentage (%):</label>
                    <input
                        type="number"
                        name={field}
                        className="form-input"
                        value={inputs[field]}
                        onChange={handleChange}
                        placeholder={`${field}`}
                    />
                </div>
            ))}
            </div>
            <button className="form-button" onClick={calculateTotal}>Calculate Attendance</button>

            {errorMessage && (
                <div id="result">
                    <h3>ERROR</h3>
                <p className="error-message">{errorMessage}</p>
                </div>)}

            {/* Conditionally render attendance only when calculated */}
            {
                attendancePercentage !== null && (
                    <div id="result">
                        <h3>Your Total Attendance:</h3>
                        <h2>
                            <span className="percentage">
                                {attendancePercentage}%
                            </span>
                        </h2>
                    </div>
                )
            }
  

            <p className="copyright">© 2024 Nikilesh Reddy</p>
        </div>
    );
}
