import React from "react";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const VenaThemeProvider = ({ theme = {}, children }) => (
  <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>
);

export default VenaThemeProvider;
