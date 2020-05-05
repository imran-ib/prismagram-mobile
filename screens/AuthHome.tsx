import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";
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
  margin-bottom: -25px;
`;

const AuthHome = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageContainer
        resizeMode="contain"
        source={require("../assets/logo.svg.webp")}
      />

      <TouchableOpacity>
        <Button
          buttonStyle={{ width: "45px" }}
          title="Create Account"
          onPress={() => navigation.navigate("Signup")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login If You Already Have An Account</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default AuthHome;
