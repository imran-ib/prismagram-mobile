import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Link = styled.Text`
  padding-right: 10px;
`;

const MessageLink = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Message")}>
        <Link>Message</Link>
      </TouchableOpacity>
    </View>
  );
};

export default MessageLink;
