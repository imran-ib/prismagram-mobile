import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { SingUp } from "../components/AuthComponents/SignupComponent";


const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f5fcff;
`;
const SignupScreen = () => {
  return (
    <Container>
      <SingUp/> 
    </Container>
  );
};

export default SignupScreen;
