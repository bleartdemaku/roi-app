import { Container } from "./styles/container.styles";
import { Flex } from "./styles/Flex.styles";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer(props) {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              { props.lorem }
            </li>
            <li>+1-543-123-4567</li>
            <li>example@example.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Flex>
        <p>&copy; 2022 Bleart. All right reserved!</p>
      </Container>
    </StyledFooter>
  );
}
