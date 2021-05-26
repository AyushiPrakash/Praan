// import { useRemoteCsv } from "./utils/hooks";
import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import Charts from "./components/Dashboard";

function App() {
  // const deviceA = useRemoteCsv("/assets/datasets/device-a.csv");
  // const deviceB = useRemoteCsv("/assets/datasets/device-b.csv");
  // const deviceC = useRemoteCsv("/assets/datasets/device-c.csv");

  return (
    <ThemeProvider
      theme={{
        textPrimary: "#00C6B9",
        textSecondary: "#8685EF",
        bgCharts: "#1B1B1B",
        backgroundPrimary: " #0C0F14",
        backgroundSecondary: "#FAF7FF",
      }}
    >
      <GlobalStyles />
      <Charts  />
      {/* <div className="App">{JSON.stringify(deviceA)}</div>
      <div className="App">{JSON.stringify(deviceB)}</div>
      <div className="App">{JSON.stringify(deviceC)}</div> */}
    </ThemeProvider>
  );
}

export default App;
