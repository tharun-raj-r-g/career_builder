import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const TaskDetailsPage = ({ route, navigation }) => {
  const { tasks, color } = route.params;
  const [isstart, setstart] = useState(0);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
    setstart(2);
  };
  return (
    <View
      style={{
        backgroundColor: "black",
      }}
    >
      <ImageBackground
        style={{}}
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
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: width,
            height: height * 0.1,
            paddingBottom: 20,
            borderBottomColor: color,
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                height: 30,
                width: 30,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Feather name={"arrow-left"} size={25} color={"white"} />
            </View>
          </TouchableOpacity>
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
            TASK DETAILS
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </View>
        <View style={{ padding: "4%" }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              alignItems: "flex-start",
              marginTop: 20,
              marginBottom: 30,
              marginRight: 220,
            }}
          >
            {tasks.taskname}
          </Text>
          <View
            style={{
              height: height * 0.3,
              width: width - 80,
              alignSelf: "center",
              borderRadius: 30,
              borderWidth: 2,
              borderColor: color,
              backgroundColor: "#283138",
            }}
          >
            <Image
              source={{
                uri: "https://mobisoftinfotech.com/resources/wp-content/uploads/2020/08/reactjs-components.png",
              }}
              style={{
                height: "100%",
                width: "100%",
                resizeMode: "cover",
                borderRadius: 30,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              alignItems: "flex-start",
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            {tasks.taskdetails}
          </Text>
          {isstart == 0 && (
            <TouchableOpacity onPress={() => setstart(1)}>
              <View
                style={{
                  height: height * 0.07,
                  width: width - 160,
                  borderRadius: 10,
                  alignSelf: "center",
                  borderWidth: 2,
                  borderColor: color,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: color,
                  }}
                >
                  START
                </Text>
              </View>
            </TouchableOpacity>
          )}
          {isstart == 1 && (
            <TouchableOpacity onPress={pickDocument}>
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 16,
                    color: color,
                    marginBottom: 5,
                  }}
                >
                  in progress...
                </Text>

                <View
                  style={{
                    height: height * 0.07,
                    width: width - 160,
                    borderRadius: 10,
                    alignSelf: "center",
                    borderWidth: 2,
                    borderColor: "#ff00ff",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "bold",
                      fontSize: 25,
                      color: "#ff00ff",
                    }}
                  >
                    SUBMIT
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}

          {isstart == 2 && (
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    height: height * 0.07,
                    width: width - 160,
                    borderRadius: 10,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontWeight: "bold",
                      fontSize: 25,
                      color: "#ff00ff",
                    }}
                  >
                    DONE !
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ marginTop: 600 }}></View>
      </ImageBackground>
    </View>
  );
};

export default TaskDetailsPage;
