import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import BarGraph from "../components/BarGraph";
import { Feather } from "@expo/vector-icons";
const ReportPage = () => {
  const skills = [
    { skill: "Coding", points: 50, color: "#FFFF00", percentage: "59%" },
    { skill: "Communication", points: 70, color: "#24FF00", percentage: "80%" },
    { skill: "DSA", points: 30, color: "#FF0000", percentage: "30%" },
    {
      skill: "Problem-Solving",
      points: 90,
      color: "#00C2FF",
      percentage: "95%",
    },
  ];
  return (
    <View style={{ backgroundColor: "#151e3d", flex: 1, alignItems: "center" }}>
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
            marginBottom: "2%",
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
            backgroundColor: "white",
            width: width * 0.5,
            height: height * 0.05,
            alignSelf: "center",
            borderRadius: 30,
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
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "center",
              color: "black",
            }}
          >
            Report
          </Text>
        </View>
        <ScrollView
          style={styles.tabContent1}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ color: "#fff", fontSize: 35, fontWeight: "bold" }}>
            Tharun
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: "10%",
            }}
          >
            Your Score ~ 95005
          </Text>

          {skills.map((skill) => (
            <View
              style={{
                height: height * 0.2,
                alignSelf: "center",
                width: width * 0.8,
                alignSelf: "center",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: skill.color,
                marginBottom: "10%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: height * 0.2,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                >
                  {skill.skill}
                </Text>
                <Text style={{ color: "gray" }}>Today's Score</Text>
                <Text
                  style={{
                    color: skill.color,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {skill.points}
                </Text>
              </View>
              <View
                style={{
                  height: height * 0.12,
                  width: width * 0.24,
                  borderRadius: 100,
                  backgroundColor: "#2b3138",
                  borderWidth: 3,
                  borderColor: skill.color,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    alignSelf: "center",
                    color: skill.color,
                    fontSize: 22,
                  }}
                >
                  {skill.percentage}
                </Text>
              </View>
            </View>
          ))}

          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
            Bar Graph
          </Text>

          <View style={{ marginBottom: 50, alignSelf: "center" }}>
            <BarGraph data1={59} data2={80} data3={30} data4={95} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
  },
  topBar: {
    flexDirection: "row",
    width: "90%",
    height: 28,
    backgroundColor: "#283138",
    borderRadius: 10,
    alignSelf: "center",
  },
  tab: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTab: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  tabText: {
    color: "#fff",
    fontSize: 18,
    opacity: 0.5,
  },
  selectedTabText: {
    color: "#000",
    opacity: 1,
  },
  tabContent1: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  tabContent: {
    flex: 1,
  },
});

export default ReportPage;
