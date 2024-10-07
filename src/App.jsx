import AttendanceCalculator from "./Components/AttendanceCalculator";
import LTPSAttendanceCalculator from './Components/LTPS-AttendanceCalculator'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ltps' element={<AttendanceCalculator />} />
          <Route path='/classes' element={<LTPSAttendanceCalculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
