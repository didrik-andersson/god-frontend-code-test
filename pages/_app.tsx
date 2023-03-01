import "../public/css/styles.css";
import React, { useState } from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { AppProps } from "next/app";
import Head from "next/head";
import { FavIcons } from '@volvo-cars/favicons/react';

type ThemeVariant = "light" | "dark";

function App({ Component, pageProps }: AppProps) {
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>("light");

  const toggleTheme = () => setThemeVariant(themeVariant === "light" ? "dark" : "light");
  
  return (
    <React.StrictMode>
      <Head>
        <title>Volvo Cars Sverige</title>
        <FavIcons />
      </Head>
      <StyleProvider>
        <ThemePicker variant={themeVariant}>
          <Component {...pageProps} toggleTheme={toggleTheme}/>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default App;
