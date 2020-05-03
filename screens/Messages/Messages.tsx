import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const Messages = () => {
  return (
    <Container>
      <Text>Messages</Text>
    </Container>
  );
};

export default Messages;
