import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
const { width, height } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";

const LeaderBoardPage = () => {
  const [selectedleaderboard, setselectedleaderboard] = useState(0);
  const color = ["white", "#63c5da", "#f5ca5a", "#8776e0", "#a3d2bf"];
  return (
    <View style={styles.container}>
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
            backgroundColor: color[selectedleaderboard],
            width: width * 0.5,
            height: height * 0.05,
            alignSelf: "center",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
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
            LeaderBoard
          </Text>
        </View>
        <View style={styles.tabContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              height: 50,
              marginTop: 30,
            }}
          >
            <TouchableOpacity onPress={() => setselectedleaderboard(0)}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                {selectedleaderboard == 0 && (
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 100,
                      backgroundColor: "white",
                    }}
                  ></View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setselectedleaderboard(1)}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "#63c5da",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                {selectedleaderboard == 1 && (
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 100,
                      backgroundColor: "#63c5da",
                    }}
                  ></View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setselectedleaderboard(2)}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "#f5ca5a",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                {selectedleaderboard == 2 && (
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 100,
                      backgroundColor: "#f5ca5a",
                    }}
                  ></View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setselectedleaderboard(3)}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "#8776e0",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                {selectedleaderboard == 3 && (
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 100,
                      backgroundColor: "#8776e0",
                    }}
                  ></View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setselectedleaderboard(4)}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "#a3d2bf",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                {selectedleaderboard == 4 && (
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 100,
                      backgroundColor: "#a3d2bf",
                    }}
                  ></View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: height * 0.3,
              width: width - 50,
              alignSelf: "center",
              borderWidth: 3,
              borderColor: color[selectedleaderboard],
              marginTop: 20,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                height: height * 0.293,
                width: width - 55,
                alignSelf: "center",
                borderRadius: 20,
                flexDirection: "row",
                backgroundColor: "gray",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "33%",
                  alignItems: "center",
                  top: 50,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderWidth: 3,
                    borderColor: "white",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg",
                    }}
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: "cover",
                      borderRadius: 100,
                      opacity: 1,
                    }}
                  />
                </View>
                <Text style={{ fontSize: 20, color: "white" }}>9500</Text>
                <Text style={{ fontSize: 10, color: "white" }}>@arjun</Text>
              </View>

              <View
                style={{
                  height: "100%",
                  width: "33%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderWidth: 3,
                    borderColor: color[selectedleaderboard],
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
                    }}
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: "cover",
                      borderRadius: 100,
                      opacity: 1,
                    }}
                  />
                </View>
                <Text style={{ fontSize: 20, color: "white" }}>11500</Text>
                <Text style={{ fontSize: 10, color: "white" }}>@vikram</Text>
              </View>

              <View
                style={{
                  height: "100%",
                  width: "33%",
                  alignItems: "center",
                  top: 50,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderWidth: 3,
                    borderColor: "white",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
                    }}
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: "cover",
                      borderRadius: 100,
                      opacity: 1,
                    }}
                  />
                </View>
                <Text style={{ fontSize: 20, color: "white" }}>9000</Text>
                <Text style={{ fontSize: 10, color: "white" }}>@rahul</Text>
              </View>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              backgroundColor: "#e4e4e4",
              marginTop: 20,
              width: width,
            }}
          >
            <View
              style={{
                height: 50,
                width: width - 50,
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#283138",
                justifyContent: "space-between",
                marginTop: 30,
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                4
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                @aravind_m
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: color[selectedleaderboard],
                  fontWeight: "bold",
                }}
              >
                8700
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: width - 50,
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#283138",
                justifyContent: "space-between",
                marginTop: 30,
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                5
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                @anand
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: color[selectedleaderboard],
                  fontWeight: "bold",
                }}
              >
                7500
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: width - 50,
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#283138",
                justifyContent: "space-between",
                marginTop: 30,
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                6
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                @john
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: color[selectedleaderboard],
                  fontWeight: "bold",
                }}
              >
                7200
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: width - 50,
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#283138",
                justifyContent: "space-between",
                marginTop: 30,
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                7
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                @george_n
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: color[selectedleaderboard],
                  fontWeight: "bold",
                }}
              >
                6900
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: width - 50,
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#283138",
                justifyContent: "space-between",
                marginTop: 30,
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                8
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                @shyam_v
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: color[selectedleaderboard],
                  fontWeight: "bold",
                }}
              >
                6700
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: width - 50,
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#283138",
                justifyContent: "space-between",
                marginTop: 30,
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                9
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                @tharun_r
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: color[selectedleaderboard],
                  fontWeight: "bold",
                }}
              >
                6500
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: width - 50,
                alignSelf: "center",
                borderRadius: 10,
                backgroundColor: "#283138",
                justifyContent: "space-between",
                marginTop: 30,
                flexDirection: "row",
                padding: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                10
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                @subha_s
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 19,
                  color: color[selectedleaderboard],
                  fontWeight: "bold",
                }}
              >
                6200
              </Text>
            </View>
          </ScrollView>
        </View>
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

export default LeaderBoardPage;
