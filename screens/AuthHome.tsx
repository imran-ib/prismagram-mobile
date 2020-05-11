import React from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
// import { Button } from "react-native-elements";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../components/Utils/Dimensions";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const ImageContainer = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: -50px;
`;

const LoginStyles = styled.TouchableOpacity`
margin-top: 20px;
`
const LoginStylesText = styled.Text`
color: ${({ theme }) => theme.blueColor};
font-size: 15px;
`

const AuthHome = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageContainer
        resizeMode="contain"
        source={require("../assets/logo.svg.webp")}
      />
        <Button
          title="Create Account"
          onPress={() => navigation.navigate("Signup")}
        />
      
      <LoginStyles onPress={() => navigation.navigate("Login")}>
        <LoginStylesText> Login If You Already Have An Account</LoginStylesText>
      </LoginStyles>
    </Container>
  );
};

export default AuthHome;
