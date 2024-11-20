import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskPage from "../screens/TaskPage";
import TaskListPage from "../screens/TaskListPage";
import TaskDetailsPage from "../screens/TaskDetailsPage";
import crocodileMonkeyGame from "../screens/crocodileMonkeyGame";
import GameStart from "../screens/GameStart";
import PythonModuleGame from "../screens/PythonModuleGame";
const Stack = createStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TaskPage" component={TaskPage} />
      <Stack.Screen name="TaskListPage" component={TaskListPage} />
      <Stack.Screen name="TaskDetailsPage" component={TaskDetailsPage} />
      <Stack.Screen name="CrocodileMonkeyGame" component={crocodileMonkeyGame} />
      <Stack.Screen name="GameStart" component={GameStart} />
      <Stack.Screen name="PythonModuleGame" component={PythonModuleGame} />
    </Stack.Navigator>
  );
};

export default TaskStack;
