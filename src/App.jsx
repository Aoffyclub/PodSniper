import React, { useEffect } from "react";

import Navbars from "./Conponents/Navbars";
import Content from "./Conponents/Content";
import { ThemeProvider as NextThemesProvider } from "next-themes";


export default function App() {

  // localStorage.setItem("theme", "light")
  return (

    <>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Navbars />
        <Content />
      </NextThemesProvider>
    </>


  );
}

