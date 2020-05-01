import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const Stack = createStackNavigator();

const Home = () => <Text>Home </Text>;
const Profile = () => <Text>Profile </Text>;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
