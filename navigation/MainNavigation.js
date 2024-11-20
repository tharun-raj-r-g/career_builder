import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./BottomTabNavigation";
import LoginNavi from './LoginNavi';
import QuestionsNavi from "./QuestionsNavi";
const Stack = createStackNavigator();

function MainNavi() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginNavi" component={LoginNavi} />
      <Stack.Screen name="QuestionsNavi" component={QuestionsNavi} />
      <Stack.Screen name="Navigation" component={Navigation} />
    </Stack.Navigator>
  );
}

export default MainNavi;
