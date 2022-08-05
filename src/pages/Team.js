import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../components/styles/Container.styles";
import GlobalStyles from "../components/styles/Global";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
import teamContent from "../teamContent";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  // 768 for tablet
  mobile: "767px",
};

function Team() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="title">
          <h1>This is our team! </h1>
        </div>
        <Container>
          {teamContent.map((item, index) => (
            <TeamMember key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default Team;
