import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AddPhotoNavigations from "./PhotoTabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import MessageLink from "../components/Utils/MessageLink";

type MainTabsParamList = {
  Home: undefined;
  Notifications: undefined;
  Search: undefined;
  Profile: undefined;
  add: undefined;
};

type StackFactoryProps = {
  name: string;
  Component: React.ComponentType<any>;
};

type MainTabsScreenNavigationProp = StackNavigationProp<
  MainTabsParamList,
  "Home"
>;
type MainTabsScreenRouteProp = RouteProp<MainTabsParamList, "Home">;

type MainTabsProps = {
  navigation: MainTabsScreenNavigationProp;
  route: MainTabsScreenRouteProp;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();
const Stack = createStackNavigator();

const StackFactory: React.FC<StackFactoryProps | any> = (name, Component) => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={name}
        component={Component}
        options={{
          headerRight: () => {
            return <MessageLink />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

const MainTabs = ({ navigation, route }: MainTabsProps) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => StackFactory("Home", Home)} />

      <Tab.Screen
        name="Notifications"
        component={() => StackFactory("Notifications", Notifications)}
      />
      <Tab.Screen
        name="add"
        component={AddPhotoNavigations}
        options={() => {
          return { tabBarVisible: false };
        }}
      />
      <Tab.Screen
        name="Search"
        component={() => StackFactory("Search", Search)}
      />
      <Tab.Screen
        name="Profile"
        component={() => StackFactory("Profile", Profile)}
      />
    </Tab.Navigator>
  );
};
export default MainTabs;
