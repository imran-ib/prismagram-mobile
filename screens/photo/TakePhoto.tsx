import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const TakePhoto = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("UploadPhoto")}>
        <Text>TakePhoto</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default TakePhoto;
