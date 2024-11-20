import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";
const QuizPage = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={{
          uri: "https://img.freepik.com/premium-vector/purple-gradient-vector-background-design-colorised-red-purple-dark-wallpaper-template_293525-1111.jpg",
        }}
      >
        <TouchableOpacity
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
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontWeight: "bold",
              marginBottom: "10%",
            }}
          >
            Test Yourself !
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              width: width * 0.9,
              height: height * 0.18,
              marginBottom: "8%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: "violet",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
            onPress={() => {
              navigation.navigate("QuizInstructionsPage");
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "violet",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: width * 0.9,
                  height: height * 0.18,
                }}
              >
                <Image
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/coding.png")}
                />
                <View
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    CODING
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.9,
              height: height * 0.18,
              marginBottom: "8%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: "violet",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
            onPress={() => {
              navigation.navigate("QuizInstructionsPage");
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "violet",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: width * 0.9,
                  height: height * 0.18,
                }}
              >
                <Image
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/communication.png")}
                />
                <View
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    COMMUNICATION
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.9,
              height: height * 0.18,
              marginBottom: "8%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: "violet",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
            onPress={() => {
              navigation.navigate("QuizInstructionsPage");
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "violet",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: width * 0.9,
                  height: height * 0.18,
                }}
              >
                <Image
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/dsa.png")}
                />
                <View
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    DSA
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.9,
              height: height * 0.18,
              marginBottom: "8%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: "violet",
              overflow: "hidden",
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
            onPress={() => {
              navigation.navigate("QuizInstructionsPage");
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "violet",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/1092587.jpg" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: width * 0.9,
                  height: height * 0.18,
                }}
              >
                <Image
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/problemsolving.png")}
                />
                <View
                  style={{
                    height: height * 0.18,
                    width: width * 0.45,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
                  >
                    PROBLEM-SOLVING
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default QuizPage;
