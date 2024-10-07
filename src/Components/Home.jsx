import React from "react";
import { useNavigate } from "react-router-dom";
import "../home.css";
import logo from '../images/changed2.svg';


const Home = () => {

  const navigate = useNavigate();
  return (
    <div className='home-container'>
        <div className="logo-container" onClick={()=>{navigate("/")}}>
            <img src={logo} alt="Attendance Calculator Logo" className="logo" />
        </div>
      <div className="home-buttons">
      <button
        onClick={() => {
          navigate("/ltps");
        }}
      >
        CLASSES
      </button>
      <button
        onClick={() => {
          navigate("/classes");
        }}
      >
        LTPS
      </button>
      </div>
      <p className="copyright">© 2024 Nikilesh Reddy</p>

    </div>
  );
};

export default Home;
