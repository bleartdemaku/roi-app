import { ThemeProvider } from "styled-components";
import Header from '../components/Header'
import { Container } from "../components/styles/Container.styles";
import GlobalStyles from "../components/styles/Global";
import content from "../content";
import Card from "../components/Card";
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

const loremProp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer lorem={loremProp}/>
      </>
    </ThemeProvider>
  );
}

export default Home;
