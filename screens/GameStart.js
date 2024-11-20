import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React from "react";
  const { width, height } = Dimensions.get("window");
  
  const GameStart = ({navigation}) => {
    return (
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("../assets/welcomejungle.jpg")}
      >
        <View
          style={{
            width: width * 0.7,
            height: height * 0.1,
            backgroundColor: "darkgreen",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 26,
            elevation: 20,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            overflow: "hidden",
            marginBottom: "5%",
          }}
        >
          <ImageBackground
            style={{
              width: width * 0.7,
              height: height * 0.15,
              backgroundColor: "darkgreen",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 26,
            }}
            source={require("../assets/greenwall.jpg")}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
              Escape The Jungle
            </Text>
          </ImageBackground>
        </View>
        <ImageBackground
          style={{
            width: width * 1,
            height: height * 0.4,
            justifyContent: "center",
            alignItems: "flex-start",
            borderRadius: 26,
            marginRight: "8%",
          }}
          source={require("../assets/oldmapwithoutbg.png")}
        >
          <Text
            style={{
              color: "brown",
              width: width * 0.6,
              marginLeft: "15%",
              fontStyle: "italic",
            }}
          >
            {" "}
            Welcome, Intrepid Python Explorer!{"\n"}
          </Text>
          <Text
            style={{
              color: "brown",
              width: width * 0.6,
              marginLeft: "15%",
              fontStyle: "italic",
            }}
          >
            You've entered the heart of Python Forest, where the path to freedom
            winds through the wisdom of Python code.{"\n\n"} The forest hold secrets,
            and each challenge you face is a step towards unlocking them.
          </Text>
        </ImageBackground>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={()=>{navigation.navigate("PythonModuleGame")}}>
          <Image
            style={{ height: height * 0.2, width: width * 0.4 }}
            source={require("../assets/pythonlogo.png")}
          ></Image>
          <Text style={{ color: "white", fontSize: 16 }}>Press to Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  export default GameStart;
  