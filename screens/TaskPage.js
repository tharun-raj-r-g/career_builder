import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { Feather } from "@expo/vector-icons";
import taskdata from "../task.json";
const { width, height } = Dimensions.get("window");

const TaskPage = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
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
            marginBottom: "5%",
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
        <Text
          style={{ color: "white", alignSelf: "flex-start", marginLeft: "5%" }}
        >
          Selected Role
        </Text>
        <Text
          style={{
            color: "white",
            alignSelf: "flex-start",
            marginLeft: "5%",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: "5%",
          }}
        >
          Software Developer
        </Text>

        <TouchableOpacity
          style={{
            height: height * 0.25,
            width: width * 0.9,
            borderRadius: 20,
            backgroundColor: "#6022aa",
            marginBottom: "10%",
            flexDirection: "row",
          }}
          onPress={() => {
            navigation.navigate("ReportStack");
          }}
        >
          <View
            style={{
              height: height * 0.25,
              width: width * 0.35,
              paddingTop: "2%",
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "flex-start",
                marginLeft: "5%",
                color: "gray",
              }}
            >
              Welcome Back!
            </Text>
            <Text
              style={{
                color: "white",
                alignSelf: "flex-start",
                marginLeft: "5%",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Tharun
            </Text>
            <Text
              style={{
                color: "white",
                alignSelf: "flex-start",
                marginLeft: "5%",
                fontWeight: "bold",
                fontSize: 18,
                color: "#ff00ff",
              }}
            >
              7500 Dp
            </Text>
          </View>
          <View
            style={{
              height: height * 0.25,
              width: width * 0.55,
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                height: height * 0.25,
                width: width * 0.55,
                backgroundColor: "#581e99",
                borderBottomLeftRadius: 150,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            >
              <Image
                source={require("../assets/softwareengineer.png")}
                style={{
                  height: height * 0.2,
                  width: width * 0.5,
                  marginTop: "5%",
                  marginLeft: "5%",
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <Text
            style={{
              color: "white",
              alignSelf: "flex-start",
              marginLeft: "5%",
              fontSize: 20,
              marginBottom: "5%",
              fontWeight: "400",
            }}
          >
            Skills
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                height: height * 0.3,
                width: width * 0.45,
                backgroundColor: "#00ffff",
                borderRadius: 20,
                marginHorizontal: width * 0.05,
                overflow: "hidden",
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
              onPress={() => {
                navigation.navigate("TaskListPage", {
                  name: taskdata.skills[0].name,
                  color: taskdata.skills[0].color,
                  skillid: 0,
                });
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://t4.ftcdn.net/jpg/04/57/92/99/360_F_457929961_8IWyFNR8s5chRtLFeNa2frM5XIFIy2NL.jpg",
                }}
                style={{
                  height: height * 0.3,
                  width: width * 0.45,
                  resizeMode: "cover",
                  justifyContent: "center",
                  borderRadius: 20,
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    height: height * 0.08,
                    width: width * 0.4,
                    backgroundColor: "#63c5da",
                    borderRadius: 20,
                    marginBottom: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                  >
                    Coding
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: height * 0.3,
                width: width * 0.45,
                backgroundColor: "#00ffff",
                borderRadius: 20,
                marginHorizontal: width * 0.05,
                overflow: "hidden",
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
              onPress={() => {
                navigation.navigate("TaskListPage", {
                  name: taskdata.skills[1].name,
                  color: taskdata.skills[1].color,
                  skillid: 1,
                });
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://images.hiverhq.com/blog/wp-content/uploads/2021/09/tr:pr-true/Internal-Communication-Best-Practices-for-Support-Teams.png",
                }}
                style={{
                  height: height * 0.3,
                  width: width * 0.45,
                  resizeMode: "cover",
                  justifyContent: "center",
                  borderRadius: 20,
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    height: height * 0.08,
                    width: width * 0.4,
                    backgroundColor: "#f5ca5a",
                    borderRadius: 20,
                    marginBottom: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                  >
                    Commmunication
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: height * 0.3,
                width: width * 0.45,
                backgroundColor: "#00ffff",
                borderRadius: 20,
                marginHorizontal: width * 0.05,
                overflow: "hidden",
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
              onPress={() => {
                navigation.navigate("TaskListPage", {
                  name: taskdata.skills[2].name,
                  color: taskdata.skills[2].color,
                  skillid: 2,
                });
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://www.freecodecamp.org/news/content/images/2021/06/1_s6hhrgR5_tXpO_j7uKaHMw-1.png",
                }}
                style={{
                  height: height * 0.3,
                  width: width * 0.45,
                  resizeMode: "cover",
                  justifyContent: "center",
                  borderRadius: 20,
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    height: height * 0.08,
                    width: width * 0.4,
                    backgroundColor: "#8776e0",
                    borderRadius: 20,
                    marginBottom: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                  >
                    DSA
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: height * 0.3,
                width: width * 0.45,
                backgroundColor: "#00ffff",
                borderRadius: 20,
                marginHorizontal: width * 0.05,
                overflow: "hidden",
                elevation: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
              onPress={() => {
                navigation.navigate("TaskListPage", {
                  name: taskdata.skills[3].name,
                  color: taskdata.skills[3].color,
                  skillid: 3,
                });
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/12/problem-solving-skills-for-software-developers-1128x635.jpg",
                }}
                style={{
                  height: height * 0.3,
                  width: width * 0.45,
                  resizeMode: "cover",
                  justifyContent: "center",
                  borderRadius: 20,
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    height: height * 0.08,
                    width: width * 0.4,
                    backgroundColor: "#a3d2bf",
                    borderRadius: 20,
                    marginBottom: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    Problem-Solving
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
          <Text
            style={{
              color: "white",
              alignSelf: "flex-start",
              marginLeft: "5%",
              fontSize: 20,
              marginBottom: "5%",
              fontWeight: "400",
              marginTop: "5%",
            }}
          >
            Your feeds
          </Text>
          <View
            style={{ flexDirection: "row", height: height * 0.1, width: width }}
          >
            <View
              style={{
                height: height * 0.1,
                width: width * 0.5,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: height * 0.1,
                  width: width * 0.4,
                  alignSelf: "center",
                  resizeMode: "contain",
                }}
                source={require("../assets/mysterybox.png")}
              />
            </View>
            <View
              style={{
                height: height * 0.1,
                width: width * 0.5,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  alignSelf: "center",
                  marginRight: "10%",
                  fontWeight: "bold",
                }}
              >
                Daily Quest is here !
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: "white",
              alignSelf: "flex-start",
              marginLeft: "5%",
              fontSize: 20,
              marginBottom: "5%",
              fontWeight: "400",
              marginTop: "5%",
            }}
          >
            New Tasks
          </Text>
          <TouchableOpacity
            style={{
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              marginBottom: "5%",
            }}
            onPress={() => {
              navigation.navigate("TaskListPage", {
                name: taskdata.skills[0].name,
                color: taskdata.skills[0].color,
                skillid: 0,
              });
            }}
          >
            <ImageBackground
              style={{
                height: height * 0.1,
                width: width * 0.9,
                alignSelf: "center",
                backgroundColor: "#00ffff",
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <Image
                style={{
                  height: height * 0.08,
                  width: width * 0.16,
                  borderRadius: 100,
                  marginLeft: "2%",
                }}
                source={{
                  uri: "https://t4.ftcdn.net/jpg/04/57/92/99/360_F_457929961_8IWyFNR8s5chRtLFeNa2frM5XIFIy2NL.jpg",
                }}
              />
              <Text style={{ color: "white", fontSize: 16 }}>
                New task in coding
              </Text>
              <View
                style={{
                  height: height * 0.04,
                  padding: "2%",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  marginRight: "5%",
                  elevation: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              >
                <Text>Deets</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              marginBottom: "5%",
            }}
            onPress={() => {
              navigation.navigate("TaskListPage", {
                name: taskdata.skills[1].name,
                color: taskdata.skills[1].color,
                skillid: 1,
              });
            }}
          >
            <ImageBackground
              style={{
                height: height * 0.1,
                width: width * 0.9,
                alignSelf: "center",
                backgroundColor: "#00ffff",
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <Image
                style={{
                  height: height * 0.08,
                  width: width * 0.16,
                  borderRadius: 100,
                  marginLeft: "2%",
                }}
                source={{
                  uri: "https://images.hiverhq.com/blog/wp-content/uploads/2021/09/tr:pr-true/Internal-Communication-Best-Practices-for-Support-Teams.png",
                }}
              />
              <Text
                style={{ color: "white", fontSize: 16, width: width * 0.4 }}
                numberOfLines={1}
              >
                New task - communication
              </Text>
              <View
                style={{
                  height: height * 0.04,
                  padding: "2%",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  marginRight: "5%",
                  elevation: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              >
                <Text>Deets</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              marginBottom: "5%",
            }}
            onPress={() => {
              navigation.navigate("TaskListPage", {
                name: taskdata.skills[2].name,
                color: taskdata.skills[2].color,
                skillid: 2,
              });
            }}
          >
            <ImageBackground
              style={{
                height: height * 0.1,
                width: width * 0.9,
                alignSelf: "center",
                backgroundColor: "#00ffff",
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <Image
                style={{
                  height: height * 0.08,
                  width: width * 0.16,
                  borderRadius: 100,
                  marginLeft: "2%",
                }}
                source={{
                  uri: "https://www.freecodecamp.org/news/content/images/2021/06/1_s6hhrgR5_tXpO_j7uKaHMw-1.png",
                }}
              />
              <Text style={{ color: "white", fontSize: 16 }}>
                New task in DSA
              </Text>
              <View
                style={{
                  height: height * 0.04,
                  padding: "2%",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  marginRight: "5%",
                  elevation: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              >
                <Text>Deets</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: "center",
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              marginBottom: "5%",
            }}
            onPress={() => {
              navigation.navigate("TaskListPage", {
                name: taskdata.skills[3].name,
                color: taskdata.skills[3].color,
                skillid: 3,
              });
            }}
          >
            <ImageBackground
              style={{
                height: height * 0.1,
                width: width * 0.9,
                alignSelf: "center",
                backgroundColor: "#00ffff",
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <Image
                style={{
                  height: height * 0.08,
                  width: width * 0.16,
                  borderRadius: 100,
                  marginLeft: "2%",
                }}
                source={{
                  uri: "https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/12/problem-solving-skills-for-software-developers-1128x635.jpg",
                }}
              />
              <Text
                style={{ color: "white", fontSize: 16, width: width * 0.4 }}
                numberOfLines={1}
              >
                New task in problem-solving
              </Text>
              <View
                style={{
                  height: height * 0.04,
                  padding: "2%",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  marginRight: "5%",
                  elevation: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              >
                <Text>Deets</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              alignSelf: "flex-start",
              marginLeft: "5%",
              fontSize: 20,
              marginBottom: "5%",
              fontWeight: "400",
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            Try Monkey Game!
          </Text>
          <TouchableOpacity
            style={{
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
            onPress={() => {
              navigation.navigate("CrocodileMonkeyGame");
            }}
          >
            <Image
              style={{
                height: height * 0.25,
                width: width * 0.9,
                resizeMode: "cover",
                borderRadius: 30,
                alignSelf: "center",
              }}
              source={{
                uri: "https://i.ytimg.com/vi/uHE8ByqnBek/maxresdefault.jpg",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: "white",
              alignSelf: "flex-start",
              marginLeft: "5%",
              fontSize: 20,
              marginBottom: "5%",
              fontWeight: "400",
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            Escape the Jungle!
          </Text>
          <TouchableOpacity
            style={{
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
            onPress={() => {
              navigation.navigate("GameStart");
            }}
          >
            <Image
              style={{
                height: height * 0.25,
                width: width * 0.9,
                resizeMode: "cover",
                borderRadius: 30,
                alignSelf: "center",
              }}
              source={{
                uri: "https://media.istockphoto.com/id/1401883162/vector/beautiful-jungle.jpg?s=612x612&w=0&k=20&c=zmNUPQ179Tf7vRCIWdC15I0_sFJeBppRos-L84NZoeM=",
              }}
            />
          </TouchableOpacity>
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TaskPage;
