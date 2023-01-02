import "./App.css";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: colors.pink[500],
    },
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
