import { useRemoteCsv } from "./utils/hooks";
import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import Dashboard from "./components/Dashboard";

function App() {
  const deviceA = useRemoteCsv(
    `${window.location.origin}/assets/datasets/device-a.csv`
  );
  const deviceB = useRemoteCsv(
    `${window.location.origin}/assets/datasets/device-b.csv`
  );
  const deviceC = useRemoteCsv(
    `${window.location.origin}/assets/datasets/device-c.csv`
  );

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
      <Dashboard data={{ deviceA, deviceB, deviceC }} />
    </ThemeProvider>
  );
}

export default App;
