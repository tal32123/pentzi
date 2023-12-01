import { CssBaseline, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "@/styles/theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      {/* This helps with CSS baseline reset and consistent styling */}
      <div style={{ backgroundColor: theme.palette.background.paper}}>
      <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
