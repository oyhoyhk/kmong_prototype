import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import Search from "../../assets/search.svg?react";
import User from "../../assets/user.svg?react";
import Cart from "../../assets/cart.svg?react";

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <div />
        <ButtonContainer>
          <Link to="/login">
            <b>로그인</b>
          </Link>
          <Link to="/register">
            <b>회원가입</b>
          </Link>
        </ButtonContainer>
      </Container>
      <Container style={{ height: "60px" }}>
        <ButtonContainer>
          <Burger />
          <Link to="/" className="logo">
            PURE SHOP
          </Link>
        </ButtonContainer>
        <ButtonContainer>
          <Search />
          <User />
          <Cart />
        </ButtonContainer>
      </Container>
    </HeaderContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;

  & > a,
  div {
    margin: 0 15px;
  }

  & .logo {
    font-size: 20px;
    font-weight: 700;
  }

  & > svg {
    width: 30px;
    height: 30px;
    margin: 15px;
    cursor: pointer;
  }
`;

const Container = styled.header`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background: white;
`;
