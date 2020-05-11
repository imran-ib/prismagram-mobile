import React from "react";
import styled from "styled-components/native";
import SignInComponent from "../components/AuthComponents/SinginComponent";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f5fcff;
`;
const Login = () => {
  return (
    <Container>
      <SignInComponent />
    </Container>
  );
};

export default Login;
