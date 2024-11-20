import {
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import GameTyping from "../components/GameTyping";
  const { width, height } = Dimensions.get("window");
  const PythonModuleGame = ({ navigation }) => {
    const [iscontentstate, setcontentstate] = useState(0);
    const [isanswer, setanswer] = useState("");
    const [isimagebackground, setimagebackground] = useState(
      "https://c4.wallpaperflare.com/wallpaper/106/666/418/forest-trees-lights-jungle-at-night-hd-wallpaper-preview.jpg"
    );
    const contentchange = () => {
      setTimeout(() => {
        setcontentstate(iscontentstate + 1);
      }, 2000); // 2000 milliseconds (2 seconds)
    };
    const [ispaperopen, setpaperopen] = useState(false);
    const setcontent = () => {
      if (isanswer == "Python") {
        setcontentstate(iscontentstate + 1);
      } else {
        setcontentstate(-1);
      }
    };
    const handleclosemap = () => {
      setpaperopen(false);
      setcontentstate(iscontentstate + 1);
      setimagebackground(
        "https://media.istockphoto.com/id/1401883162/vector/beautiful-jungle.jpg?s=612x612&w=0&k=20&c=zmNUPQ179Tf7vRCIWdC15I0_sFJeBppRos-L84NZoeM="
      );
    };
    return (
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={{
          uri: isimagebackground,
        }}
      >
        {iscontentstate != -1 ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "12%",
            }}
          >
            {iscontentstate >= 10 ? (
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
                <TouchableOpacity>
                  <Image
                    style={{ height: height * 0.07, width: width * 0.1 }}
                    source={require("../assets/pythonmap.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={{ height: height * 0.07, width: width * 0.1 }} />
                </TouchableOpacity>
              </View>
            ) : null}
            {iscontentstate == 0 ? (
              <ImageBackground
                style={{
                  height: height * 0.3,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingTop: "10%",
                }}
                source={require("../assets/cloudleft.png")}
              >
                <GameTyping
                  text={[
                    "Woah... Wh...Where am I....Whhat's that sound in there ??!!",
                  ]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {iscontentstate == 1 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={["Someone, he...Helppp me...!!"]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {iscontentstate == 2 ? (
              <View
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setcontentstate(iscontentstate + 1);
                  }}
                >
                  <ImageBackground
                    style={{
                      height: height * 0.23,
                      width: width * 0.8,
                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "20%",
                    }}
                    source={require("../assets/treeboard.png")}
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Help The Tiger!
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            ) : null}
            {iscontentstate == 3 ? (
              <View
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity>
                  <ImageBackground
                    style={{
                      height: height * 0.55,
                      width: width * 0.95,
                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15%",
                      marginTop: "10%",
                    }}
                    source={require("../assets/questiontree.png")}
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: "2%",
                      }}
                    >
                      Which of the following is an interpreted, object-oriented,
                      high-level programming language with dynamic semantics.
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setanswer("Python");
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          color: "black",
                          fontSize: 16,
                          fontWeight: "bold",
                          marginBottom: "2%",
                        }}
                      >
                        Python
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setanswer("C");
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          color: "black",
                          fontSize: 18,
                          fontWeight: "bold",
                          marginBottom: "2%",
                        }}
                      >
                        C
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setanswer("Java");
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          color: "black",
                          fontSize: 18,
                          fontWeight: "bold",
                          marginBottom: "2%",
                        }}
                      >
                        Java
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setanswer("C++");
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          color: "black",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        C++
                      </Text>
                    </TouchableOpacity>
                    {isanswer ? (
                      <TouchableOpacity onPress={setcontent}>
                        <Text
                          style={{
                            alignSelf: "center",
                            color: "white",
                            fontSize: 18,
                            fontWeight: "bold",
                            backgroundColor: "brown",
                            borderRadius: 20,
                          }}
                        >
                          Confirm
                        </Text>
                      </TouchableOpacity>
                    ) : null}
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            ) : null}
            {iscontentstate == 4 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={[
                    "Holaa!! Thanks for saving me.Now I will help you throughout your journey!!",
                  ]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {iscontentstate == 5 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={[
                    "The only way to escape this forest is to learn python. Search for hints, to escape the forest!!",
                  ]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {iscontentstate == 6 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={["Lets Gooo!!"]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {iscontentstate == 7 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={["Search for hints. . . . . . . . . . ."]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {iscontentstate == 8 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={["There is a hint for you!"]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {ispaperopen ? (
              <View>
                <ImageBackground
                  style={{
                    height: height * 0.55,
                    width: width * 0.9,
                    alignSelf: "flex-end",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    paddingTop: "30%",
                    marginRight: "15%",
                  }}
                  source={require("../assets/pythonmap.png")}
                >
                  <Text style={{ color: "black", fontSize: 18 }}></Text>
                </ImageBackground>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginRight: "15%",
                    marginBottom: "8%",
                  }}
                >
                  You have found the map!
                </Text>
                <TouchableOpacity
                  style={{
                    height: height * 0.07,
                    width: width * 0.9,
                    alignSelf: "center",
                    borderRadius: 20,
                    backgroundColor: "blue",
                    marginRight: "15%",
                    justifyContent: "center",
                  }}
                  onPress={handleclosemap}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 20,
                      justifyContent: "center",
                    }}
                  >
                    Close map
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
            {iscontentstate == 11 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={[
                    "The map will be on the right corner, you can check out the map anytime",
                  ]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            {iscontentstate >= 12 ? (
              <ImageBackground
                style={{
                  height: height * 0.45,
                  width: width * 0.7,
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  paddingTop: "30%",
                  marginRight: "30%",
                }}
                source={require("../assets/cloudright.jpg")}
              >
                <GameTyping
                  text={[
                    "Here we have found a mystery box! Woahh.. Hope this helps...",
                  ]}
                  onComplete={contentchange}
                />
              </ImageBackground>
            ) : null}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "flex-start",
              }}
            >
              {iscontentstate == 0 ? (
                <Image
                  style={{
                    height: height * 0.5,
                    width: width * 0.38,
                    alignSelf: "flex-start",
                    marginLeft: "5%",
                  }}
                  source={require("../assets/boyscary.png")}
                />
              ) : null}
              {iscontentstate == 1 ||
              iscontentstate == 2 ||
              iscontentstate == 3 ? (
                <Image
                  style={{
                    height: height * 0.5,
                    width: width * 0.38,
                    alignSelf: "flex-start",
                    marginLeft: "5%",
                  }}
                  source={require("../assets/boylooking.png")}
                />
              ) : null}
              {iscontentstate == 1 ||
              iscontentstate == 2 ||
              iscontentstate == 3 ? (
                <View style={{ flexDirection: "row", marginRight: "10%" }}>
                  <Image
                    style={{
                      height: height * 0.2,
                      width: width * 0.35,
                      alignSelf: "flex-end",
                      marginLeft: "5%",
                      marginBottom: "20%",
                    }}
                    source={require("../assets/tigerscary.png")}
                  ></Image>
                  <Image
                    style={{
                      height: height * 0.1,
                      width: width * 0.3,
                      alignSelf: "flex-end",
                      marginLeft: "5%",
                      marginBottom: "10%",
                      marginRight: "20%",
                    }}
                    source={require("../assets/snakeimage.jpg")}
                  ></Image>
                </View>
              ) : null}
              {iscontentstate == 4 || iscontentstate == 5 ? (
                <View style={{ flexDirection: "row", marginRight: "15%" }}>
                  <Image
                    style={{
                      height: height * 0.5,
                      width: width * 0.38,
                      alignSelf: "flex-start",
                      marginLeft: "5%",
                    }}
                    source={require("../assets/boylooking.png")}
                  />
                  <Image
                    style={{
                      height: height * 0.2,
                      width: width * 0.47,
                      alignSelf: "flex-end",
                      marginLeft: "5%",
                      marginBottom: "20%",
                    }}
                    source={require("../assets/happytiger.jpg")}
                  ></Image>
                </View>
              ) : null}
              {iscontentstate == 6 ? (
                <View style={{ flexDirection: "row", marginRight: "15%" }}>
                  <Image
                    style={{
                      height: height * 0.5,
                      width: width * 0.38,
                      alignSelf: "flex-start",
                      marginLeft: "5%",
                    }}
                    source={require("../assets/boylooking.png")}
                  />
                  <Image
                    style={{
                      height: height * 0.27,
                      width: width * 0.47,
                      alignSelf: "flex-end",
                      marginLeft: "5%",
                      marginBottom: "20%",
                    }}
                    source={require("../assets/tigerscary.png")}
                  ></Image>
                </View>
              ) : null}
              {iscontentstate == 7 ? (
                <View style={{ flexDirection: "row", marginRight: "15%" }}>
                  <Image
                    style={{
                      height: height * 0.5,
                      width: width * 0.38,
                      alignSelf: "flex-start",
                      marginLeft: "5%",
                    }}
                    source={require("../assets/boyrunning.jpg")}
                  />
                  <Image
                    style={{
                      height: height * 0.2,
                      width: width * 0.47,
                      alignSelf: "flex-end",
                      marginLeft: "5%",
                      marginBottom: "20%",
                    }}
                    source={require("../assets/walkingtiger.png")}
                  ></Image>
                </View>
              ) : null}
              {iscontentstate == 8 || iscontentstate == 9 ? (
                <View style={{ flexDirection: "row", marginRight: "15%" }}>
                  <Image
                    style={{
                      height: height * 0.5,
                      width: width * 0.38,
                      alignSelf: "flex-start",
                      marginLeft: "5%",
                    }}
                    source={require("../assets/boylooking.png")}
                  />
                  {!ispaperopen ? (
                    <TouchableOpacity
                      onPress={() => {
                        setpaperopen(true);
                      }}
                    >
                      <Image
                        style={{
                          height: height * 0.05,
                          width: width * 0.1,
                          alignSelf: "flex-start",
                          marginLeft: "5%",
                          marginTop: "510%",
                        }}
                        source={require("../assets/trashpaper.jpg")}
                      />
                    </TouchableOpacity>
                  ) : null}
                  <Image
                    style={{
                      height: height * 0.2,
                      width: width * 0.47,
                      alignSelf: "flex-end",
                      marginLeft: "5%",
                      marginBottom: "20%",
                    }}
                    source={require("../assets/happytiger.jpg")}
                  ></Image>
                </View>
              ) : null}
              {iscontentstate == 11 ? (
                <View style={{ flexDirection: "row", marginRight: "15%" }}>
                  <Image
                    style={{
                      height: height * 0.5,
                      width: width * 0.38,
                      alignSelf: "flex-start",
                      marginLeft: "5%",
                    }}
                    source={require("../assets/boylooking.png")}
                  />
                  <Image
                    style={{
                      height: height * 0.2,
                      width: width * 0.47,
                      alignSelf: "flex-end",
                      marginLeft: "5%",
                      marginBottom: "20%",
                    }}
                    source={require("../assets/happytiger.jpg")}
                  ></Image>
                </View>
              ) : null}
              {iscontentstate == 10 ? (
                <View>
                  <ImageBackground
                    style={{
                      height: height * 0.35,
                      width: width * 0.95,
                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10%",
                      marginTop: "10%",
                    }}
                    source={require("../assets/questiontree.png")}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        width: width * 0.52,
                        color: "white",
                      }}
                    >
                      Chapter-1:Variables
                    </Text>
                  </ImageBackground>
                  <TouchableOpacity
                    onPress={() => {
                      setcontentstate(iscontentstate + 1);
                    }}
                    style={{ overflow: "hidden", borderRadius: 20 }}
                  >
                    <ImageBackground
                      style={{
                        height: height * 0.07,
                        width: width * 0.5,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "5%",
                        backgroundColor: "brown",
                        borderRadius: 30,
                      }}
                      source={require("../assets/greenwall.jpg")}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          color: "white",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        Press to Continue
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>
        ) : (
          <View>
            <ImageBackground
              style={{
                height: height * 0.23,
                width: width * 0.7,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "5%",
              }}
              source={require("../assets/treeboard.png")}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "black",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Game Over!
              </Text>
            </ImageBackground>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Start");
              }}
              style={{ overflow: "hidden", borderRadius: 20 }}
            >
              <ImageBackground
                style={{
                  height: height * 0.07,
                  width: width * 0.5,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "5%",
                  backgroundColor: "brown",
                  borderRadius: 30,
                }}
                source={require("../assets/greenwall.jpg")}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Press to exit
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    );
  };
  
  export default PythonModuleGame;
  