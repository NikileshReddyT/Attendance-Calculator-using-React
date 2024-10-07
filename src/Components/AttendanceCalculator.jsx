import React, { useState } from 'react';
import '../styles.css';
import logo from '../images/changed2.svg';
import { useNavigate } from 'react-router-dom';

export default function AttendanceCalculator() {

    const navigate = useNavigate();

    const [desiredPercentage, setDesiredPercentage] = useState('');
    const [conductedClasses, setConductedClasses] = useState('');
    const [attendedClasses, setAttendedClasses] = useState('');
    const [result, setResult] = useState('');
  
    const calculateAttendance = () => {
      const desiredPercentageNum = parseFloat(desiredPercentage);
      const conductedClassesArr = conductedClasses.split(' ').map(Number);
      const attendedClassesArr = attendedClasses.split(' ').map(Number);
  
      // Validation checks
      if (isNaN(desiredPercentageNum) || desiredPercentageNum < 0 || desiredPercentageNum > 100) {
        setResult('Please enter a valid desired percentage (0-100).');
        return;
      }
  
      const totalConducted = conductedClassesArr.reduce((acc, cur) => acc + cur, 0);
      const totalAttended = attendedClassesArr.reduce((acc, cur) => acc + cur, 0);
  
      if (totalAttended > totalConducted) {
        setResult('Attended classes cannot exceed conducted classes. Please check the details.');
        return;
      }
  
      let presentPercentage = parseFloat(((totalAttended / totalConducted) * 100).toFixed(2));
      const initialPercentage = presentPercentage;
      let x = 0;
      let y = 0;
      let numerator, denominator;
  
      // Calculate the number of additional classes needed to achieve the desired percentage
      while (presentPercentage < desiredPercentageNum) {
        x++;
        presentPercentage = parseFloat(
          (((totalAttended + x) / (totalConducted + x)) * 100).toFixed(2)
        );
      }
  
      numerator = totalAttended + x;
      denominator = totalConducted + x;
  
      // Reset presentPercentage to the initial value
      presentPercentage = initialPercentage;
  
      // Calculate the number of classes that can be missed while maintaining the desired percentage
      while (presentPercentage > desiredPercentageNum) {
        const tempPercentage = parseFloat(
          ((totalAttended / (totalConducted + (y + 1))) * 100).toFixed(2)
        );
        if (tempPercentage < desiredPercentageNum) {
          break;
        }
        presentPercentage = tempPercentage;
        y++;
      }
  
      // Formatting the result message
      let resultMessage = `Your current percentage = <span class="percentage">${initialPercentage}%</span> (${totalAttended} / ${totalConducted}).<br><br>`;
  
      if (initialPercentage === desiredPercentageNum) {
        resultMessage += `You have the correct percentage of <span class="percentage">${desiredPercentage}%</span>. Please maintain this.`;
      } else if (x > 0) {
        resultMessage += `To achieve <span class="important-info">${desiredPercentage}%</span>, you need to <span class="class-count">Attend ${x} More Classes (50 min)</span>.<br><br>After attending <span class="class-count">${x} Classes</span>, your percentage will be <span class="percentage">${parseFloat(
          ((numerator / denominator) * 100).toFixed(2)
        )}%</span> (${numerator} / ${denominator}).`;
      } else if (y > 0) {
        resultMessage += `You can <span class="class-count">Bunk ${y} More Classes (50 min)</span> and still maintain a percentage of <span class="important-info">${desiredPercentage}%</span>.<br><br>After missing <span class="class-count">${y} Classes</span>, your percentage will be <span class="percentage">${parseFloat(
          ((totalAttended / (totalConducted + y)) * 100).toFixed(2)
        )}%</span> (${totalAttended} / ${totalConducted + y}).`;
      } else {
        resultMessage += `No further action is required to meet the desired percentage.`;
      }
  
      setResult(resultMessage);
    };


  return (
    <div className="container">
      <div className="logo-container" onClick={()=>{navigate("/")}}>
        <img src={logo} alt="Attendance Calculator Logo" className="logo" />
      </div>
      <label htmlFor="desiredPercentage">Desired Attendance Percentage:</label>
      <input
        type="text"
        id="desiredPercentage"
        value={desiredPercentage}
        onChange={(e) => setDesiredPercentage(e.target.value)}
        placeholder="Enter desired percentage"
      />

      <label htmlFor="conductedClasses">Number of Classes Conducted (separated by spaces):</label>
      <input
        type="text"
        id="conductedClasses"
        value={conductedClasses}
        onChange={(e) => setConductedClasses(e.target.value)}
        placeholder="Enter conducted classes"
      />

      <label htmlFor="attendedClasses">Number of Classes Attended (separated by spaces):</label>
      <input
        type="text"
        id="attendedClasses"
        value={attendedClasses}
        onChange={(e) => setAttendedClasses(e.target.value)}
        placeholder="Enter attended classes"
      />

      <button onClick={calculateAttendance}>Calculate</button>

      <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
      <p className="copyright">© 2024 Nikilesh Reddy</p>

    </div>
  )
}
