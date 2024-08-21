import { useState } from 'react'

import AttendanceCalculator from './Components/AttendanceCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AttendanceCalculator/>
    </>
  )
}

export default App
