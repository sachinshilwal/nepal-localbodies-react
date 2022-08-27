import { useState } from 'react'
import reactLogo from './assets/react.svg'
import useDistrictComponent from 'nepal-localbodies-react/localBodies'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const districtComponent = useDistrictComponent()
  return (
    <div className="App">
      hi
      {districtComponent}
    </div>
  )
}

export default App
