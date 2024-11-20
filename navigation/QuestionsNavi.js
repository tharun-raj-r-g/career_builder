import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CareerQuestionnairePage from "../screens/CareerQuestionnairePage";
import CareerPickInstrutionsPage from "../screens/CareerPickInstructionsPage";
import JobSelectionPage from "../screens/JobSelectionPage";
const Stack = createStackNavigator();

const QuestionsNavi = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CareerPickInstrutionsPage" component={CareerPickInstrutionsPage} />
      <Stack.Screen name="CareerQuestionnairePage" component={CareerQuestionnairePage} />
      <Stack.Screen name="JobSelectionPage" component={JobSelectionPage}/>
    </Stack.Navigator>
  );
};

export default QuestionsNavi;