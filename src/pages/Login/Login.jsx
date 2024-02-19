import { Button, Checkbox, Input, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const [info, setInfo] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <h1>로그인</h1>
      <p>PURE Shop의 다양한 혜택을 누리세요.</p>
      <Form>
        <TextField
          label="아이디"
          type="text"
          placeholder="아이디"
          name="id"
          sx={{ width: "450px", marginBottom: "15px" }}
          onChange={handleChange}
          value={info.id}
        />
        <TextField
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          name="password"
          sx={{ width: "450px", marginBottom: "15px" }}
          onChange={handleChange}
          value={info.password}
        />
        <OptionsContainer>
          <Option>
            <Checkbox id="save" />
            <label htmlFor="save">아이디 저장</label>
          </Option>
          <Option>
            <span className="find">아이디 찾기</span>
            <span>비밀번호 찾기</span>
          </Option>
        </OptionsContainer>
        <Button
          variant="contained"
          sx={{ width: "450px", height: "50px", marginBottom: "25px" }}
        >
          로그인
        </Button>
        <Link to="/register">아직 회원이 아니신가요?</Link>
      </Form>
    </Container>
  );
}

const OptionsContainer = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  color: #b4b4b4;

  & span {
    cursor: pointer;
    &:hover {
      color: black;
    }
  }

  & .find {
    &::after {
      content: "|";
      margin: 0 20px;
      color: #b4b4b4;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a {
    color: #b4b4b4;
  }
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0;

  & > h1 {
    text-align: center;
    margin-bottom: 5px;
  }
  & > p {
    text-align: center;
    margin-bottom: 30px;
    color: #b4b4b4;
  }
`;
