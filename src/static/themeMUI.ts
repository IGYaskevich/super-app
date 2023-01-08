import { createTheme } from "@mui/material";
import "./styles/variables.scss";

export const themeMUI = createTheme({
  palette: {
    primary: {
      light: "#4e5c67",
      main: "#24292f",
      dark: "#121518",
      contrastText: "#fff",
    },
  },
});
