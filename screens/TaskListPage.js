import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import TaskListComponent from "../components/TaskListComponent";
import taskdata from "../task.json";
const TaskListPage = ({ route, navigation }) => {
  const { name, color, skillid } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#151e3d",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={{
          uri: "https://img.freepik.com/premium-vector/purple-gradient-vector-background-design-colorised-red-purple-dark-wallpaper-template_293525-1111.jpg",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: height * 0.05,
            width: width,
            marginTop: "10%",
          }}
        >
          <Feather
            name={"user"}
            size={25}
            color={"white"}
            style={{ marginLeft: "5%" }}
          />
          <Feather
            name={"bell"}
            size={25}
            color={"white"}
            style={{ marginRight: "5%" }}
          />
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: width,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            height: 70,
            width: 300,
            backgroundColor: "#2b3138",
            alignSelf: "center",
            borderRadius: 25,
            borderWidth: 3,
            borderColor: color,
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 30,
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
        >
          <View
            style={{
              backgroundColor: color,
              height: 30,
              width: 70,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <Text style={{ fontSize: 28, color: color, fontWeight: "bold" }}>
            {taskdata.skills[skillid].dudepoints}
          </Text>
          <View
            style={{
              backgroundColor: color,
              height: 30,
              width: 70,
              borderTopLeftRadius: 30,
              borderBottomRightRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: height, width: width }}
        >
          {taskdata.skills[skillid].weektasks.map((item, index) => (
            <TaskListComponent
              id={skillid}
              taskdata={taskdata}
              item={item}
              index={index}
              navigation={navigation}
              route={route}
            />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TaskListPage;
