import React,{useState} from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskStack from "./TaskNavigation";
import ReportStack from "./ReportNavigation";
import QuizStack from "./QuizNavigation";
import LeaderBoardStack from "./LeaderBoardnavigation";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      initialRouteName="TaskStack"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#6612aa",
          paddingHorizontal: 35,
        },
      }}
    >
      <Tab.Screen
        name="TaskStack"
        component={TaskStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabView,
                  {
                    backgroundColor: focused ? "#ff00ff" : null,
                    elevation: focused ? 5 : null,
                  },
                ]}
              >
                <Feather name="clipboard" size={25} color="white" />
                <Text
                  style={{
                    color: "white",
                    margin: 2.5,
                    marginLeft: 5,
                  }}
                >
                  {focused ? "Tasks" : null}
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="QuizStack"
        component={QuizStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabView,
                  {
                    backgroundColor: focused ? "#ff00ff" : null,
                    elevation: focused ? 5 : null,
                  },
                ]}
              >
                <Feather name="compass" size={25} color="white" />
                <Text
                  style={{
                    color: "white",
                    margin: 2.5,
                    marginLeft: 5,
                  }}
                >
                  {focused ? "Quiz" : null}
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ReportStack"
        component={ReportStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabView,
                  {
                    backgroundColor: focused ? "#ff00ff" : null,
                    elevation: focused ? 5 : null,
                  },
                ]}
              >
                <Feather name="pie-chart" size={25} color="white" />
                <Text
                  style={{
                    color: "white",
                    margin: 2.5,
                    marginLeft: 5,
                  }}
                >
                  {focused ? "Report" : null}
                </Text>
              </View>
            );
          },
        }}
      />
       <Tab.Screen
        name="LeaderBoardStack"
        component={LeaderBoardStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.tabView,
                  {
                    backgroundColor: focused ? "#ff00ff" : null,
                    elevation: focused ? 5 : null,
                  },
                ]}
              >
                <Feather name="globe" size={25} color="white" />
                <Text
                  style={{
                    color: "white",
                    margin: 2.5,
                    marginLeft: 5,
                  }}
                >
                  {focused ? "Global" : null}
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;

const styles = {
  tabView: {
    borderRadius: 25,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
};
