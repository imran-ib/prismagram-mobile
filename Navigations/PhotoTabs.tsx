import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/photo/SelectPhoto";
import TakePhoto from "../screens/photo/TakePhoto";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type MaterialTabPramList = {
  SelectPhoto: undefined;
  TakePhoto: undefined;
};

type MaterialScreenRouteProp = RouteProp<MaterialTabPramList, "SelectPhoto">;

type MaterialTabScreenNavigationProp = StackNavigationProp<
  MaterialTabPramList,
  "SelectPhoto"
>;

type Props = {
  route: MaterialScreenRouteProp;
  navigation: MaterialTabScreenNavigationProp;
};

const MaterialTab = createMaterialTopTabNavigator<MaterialTabPramList>();

const AddPhotoNavigations = ({ navigation, route }: Props) => {
  return (
    <MaterialTab.Navigator tabBarPosition="bottom">
      <MaterialTab.Screen name="SelectPhoto" component={SelectPhoto} />
      <MaterialTab.Screen name="TakePhoto" component={TakePhoto} />
    </MaterialTab.Navigator>
  );
};

export default AddPhotoNavigations;
