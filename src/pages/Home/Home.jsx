import styled from "styled-components";
import Nav from "./Nav";
import Brand from "./Brand";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Nav />
      <Brand />
    </Container>
  );
}

const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("src/assets/banner.jpg");
  background-size: 100% 100%;
  background-position: center center;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
