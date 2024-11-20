import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuizPage from "../screens/QuizPage";
import QuizInstructionsPage from "../screens/QuizInstructionsPage";
import QuestionnairePage from "../screens/QuestionnairePage";
const Stack = createStackNavigator();

const QuizStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="QuizPage" component={QuizPage} />
      <Stack.Screen name="QuizInstructionsPage" component={QuizInstructionsPage} />
      <Stack.Screen name="QuestionnairePage" component={QuestionnairePage} />
      
    </Stack.Navigator>
  );
};

export default QuizStack;