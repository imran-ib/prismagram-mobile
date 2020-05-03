import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
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
  width: ${screen.width / 3};
  height: 25px;
`;

const AuthHome = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageContainer
        resizeMode="contain"
        source={require("../assets/logo.svg.webp")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login If You Already Have An Account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("Signup")}>
          Create An Account
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default AuthHome;
