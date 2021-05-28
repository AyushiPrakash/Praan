import { useState } from "react";
import { useRemoteCsv } from "./utils/hooks";
import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import Dashboard from "./components/Dashboard";
import ThemeButton from "./components/ThemeButton";

const lightScheme = {
  textPrimary: "#2c2c2c",
  backgroundPrimary: " #eeeeee",
  backgroundSecondary: "#fafafa",
  gridColor: "#414141",
  selectColor: "#fcfcfc",
};

const darkScheme = {
  textPrimary: "#fff",
  backgroundPrimary: " #0C0F14",
  backgroundSecondary: "#1B1B1B",
  gridColor: "#414141",
  selectColor: "#414141",
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  //To toggle between themes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  //To fetch the data from csv files
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
    <ThemeProvider theme={darkMode ? darkScheme : lightScheme}>
      <GlobalStyles />
      <ThemeButton toggleTheme={toggleTheme} darkMode={darkMode} />
      <Dashboard data={{ deviceA, deviceB, deviceC }} />
    </ThemeProvider>
  );
}

export default App;
