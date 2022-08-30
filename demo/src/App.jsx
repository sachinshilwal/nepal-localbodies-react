import useDistrictComponent from "nepal-localbodies-react/localBodies";

function App() {
const {template, districtSelected, localBodySelected, provinceSelected} = useDistrictComponent();

  return (
    <div className="App">
      {template}
      <div>Current Province: {provinceSelected}</div>
      <div>Current District: {districtSelected}</div>
      <div>Current localBody: {localBodySelected}</div>
    </div>
  )
}

export default App
