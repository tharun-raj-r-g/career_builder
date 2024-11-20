import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LeaderBoardPage from "../screens/LeaderBoardPage";
const Stack = createStackNavigator();

const LeaderBoardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LeaderBoardPage" component={LeaderBoardPage} />
    </Stack.Navigator>
  );
};

export default LeaderBoardStack;