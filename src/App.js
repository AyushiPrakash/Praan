import "./App.css";
import { useRemoteCsv } from "./utils/hooks";

function App() {
  const deviceA = useRemoteCsv("/assets/datasets/device-a.csv");
  const deviceB = useRemoteCsv("/assets/datasets/device-b.csv");
  const deviceC = useRemoteCsv("/assets/datasets/device-c.csv");


  return <div className="App">{JSON.stringify(deviceA)}</div>;
}

export default App;
