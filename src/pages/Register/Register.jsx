import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

export default function Register() {
  const [error, setError] = useState("");
  const [info, setInfo] = useState({
    id: { value: "", error: false },
    password: { value: "", error: false },
    passwordCheck: { value: "", error: false },
    name: { value: "", error: false },
    email: { value: "", error: false },
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: { value: value, error: false } });
  };

  const handleIdBlur = () => {
    if (info.id.value === "") {
      setInfo({ ...info, id: { value: "", error: true } });
      setError("아이디를 입력해주세요.");
      return;
    }
    setError("");
  };

  const handlePasswordBlur = () => {
    if (info.password.value === "") {
      setInfo({ ...info, password: { value: "", error: true } });
      setError("비밀번호를 입력해주세요.");
      return;
    }
    setError("");
  };

  const handlePasswordCheckBlur = () => {
    if (info.passwordCheck.value === "") {
      setInfo({ ...info, passwordCheck: { value: "", error: true } });
      setError("비밀번호를 입력해주세요.");
      return;
    }
    if (info.password.value !== info.passwordCheck.value) {
      setInfo({
        ...info,
        passwordCheck: { value: info.passwordCheck.value, error: true },
      });
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setError("");
  };

  const handleNameBlur = () => {
    if (info.name.value === "") {
      setInfo({ ...info, name: { value: "", error: true } });
      setError("이름을 입력해주세요.");
      return;
    }
    setError("");
  };

  const handleEmailBlur = () => {
    if (info.email.value === "") {
      setInfo({ ...info, email: { value: "", error: true } });
      setError("이메일을 입력해주세요.");
      return;
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(info.email.value) === false) {
      setInfo({ ...info, email: { value: info.email.value, error: true } });
      setError("이메일 형식이 올바르지 않습니다.");
      return;
    }
    setError("");
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <p>PURE Shop에 가입하여 더 많은 혜택을 만나보세요!</p>
      <TextField
        label="아이디"
        type="text"
        placeholder="아이디"
        onChange={onChange}
        name="id"
        value={info.id.value}
        error={info.id.error}
        sx={{ width: "450px", marginBottom: "15px" }}
        onBlur={handleIdBlur}
      />
      <TextField
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
        name="password"
        value={info.password.value}
        error={info.password.error}
        sx={{ width: "450px", marginBottom: "15px" }}
        onBlur={handlePasswordBlur}
      />
      <TextField
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        onChange={onChange}
        name="passwordCheck"
        value={info.passwordCheck.value}
        error={info.passwordCheck.error}
        sx={{ width: "450px", marginBottom: "15px" }}
        onBlur={handlePasswordCheckBlur}
      />
      <TextField
        label="이름"
        type="text"
        placeholder="이름"
        onChange={onChange}
        name="name"
        value={info.name.value}
        error={info.name.error}
        sx={{ width: "450px", marginBottom: "15px" }}
        onBlur={handleNameBlur}
      />
      <TextField
        label="이메일"
        type="email"
        placeholder="이메일"
        onChange={onChange}
        name="email"
        error={info.email.error}
        value={info.email.value}
        sx={{ width: "450px", marginBottom: "15px" }}
        onBlur={handleEmailBlur}
      />
      <ErrorText>{error}</ErrorText>
      <Button
        variant="contained"
        sx={{ width: "450px", height: "50px", marginBottom: "25px" }}
      >
        회원가입
      </Button>
    </Container>
  );
}

const ErrorText = styled.div`
  color: red;
  margin-bottom: 15px;
  height: 30px;
`;

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
