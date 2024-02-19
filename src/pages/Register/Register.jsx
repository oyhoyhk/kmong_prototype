import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export default function Register() {
  return (
    <Container>
      <h1>회원가입</h1>
      <p>PURE Shop에 가입하여 더 많은 혜택을 만나보세요!</p>
      <TextField
        label="아이디"
        type="text"
        placeholder="아이디"
        sx={{ width: "450px", marginBottom: "15px" }}
      />
      <TextField
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
        sx={{ width: "450px", marginBottom: "15px" }}
      />
      <TextField
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        sx={{ width: "450px", marginBottom: "15px" }}
      />
      <TextField
        label="이름"
        type="text"
        placeholder="이름"
        sx={{ width: "450px", marginBottom: "15px" }}
      />
      <TextField
        label="이메일"
        type="email"
        placeholder="이메일"
        sx={{ width: "450px", marginBottom: "15px" }}
      />
      <TextField
        label="휴대폰 번호"
        type="text"
        placeholder="휴대폰 번호"
        sx={{ width: "450px", marginBottom: "15px" }}
      />
      <Button
        variant="contained"
        sx={{ width: "450px", height: "50px", marginBottom: "25px" }}
      >
        회원가입
      </Button>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
