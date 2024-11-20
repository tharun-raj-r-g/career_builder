import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
import React, { useEffect } from "react";
const OtpVerified = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("QuestionsNavi");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"purple"} barStyle={"dark-content"} />
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/purple-gradient-vector-background-design-colorised-red-purple-dark-wallpaper-template_293525-1111.jpg",
        }}
        style={styles.backgroundImage}
      />
      <View style={styles.back}>
        <Text style={styles.text}>OTP Verified Successfully</Text>
      </View>
    </View>
  );
};

export default OtpVerified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  icon1: {
    width: 70,
    height: 70,
    top: 10,
    resizeMode: "contain",
  },
  text: {
    color: "pink",
    marginTop: 40,
    fontSize: 35,
  },
  back: {
    marginLeft: 50,
    marginRight: 50,
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  bottom: {
    position: "absolute",
    bottom: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    flex: 1,
  },
  text2: {
    fontSize: 16,
    color: "purple",
    marginLeft: 5,
  },
});
