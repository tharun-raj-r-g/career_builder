import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReportPage from "../screens/ReportPage";
const Stack = createStackNavigator();

const ReportStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ReportPage" component={ReportPage} />
    </Stack.Navigator>
  );
};

export default ReportStack;