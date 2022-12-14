import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import GlobalStyles from "../components/styles/Global";
import Footer from "../components/Footer";


const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  // 768 for tablet
  mobile: "767px",
};

const loremProp =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        
        <Footer lorem={loremProp} />
      </>
    </ThemeProvider>
  );
}

export default Blog;
