import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import ConfirmKeyComponent from "../components/AuthComponents/ConfirmKeyComponent";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f5fcff;
`;
const ConfirmKey = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ConfirmKeyComponent navigation={navigation} />
    </Container>
  );
};

export default ConfirmKey;
