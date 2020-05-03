import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Message from "../screens/Messages/Message";
import Messages from "../screens/Messages/Messages";

type StackPramList = {
  Message: undefined;
  Messages: undefined;
};

type MaterialScreenRouteProp = RouteProp<StackPramList, "Message">;

type StackScreenNavigationProp = StackNavigationProp<StackPramList, "Message">;

type Props = {
  route: MaterialScreenRouteProp;
  navigation: StackScreenNavigationProp;
};

const Stack = createStackNavigator<StackPramList>();

const MessageNavigations = ({ navigation, route }: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default MessageNavigations;
