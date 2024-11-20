import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  CheckBox,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
const { width, height } = Dimensions.get("window");

const crocodileMonkeyGame = ({ navigation }) => {
  const [isQuestion, setQuestion] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [seconds, setSeconds] = useState(1000);
  const [ispoint, setPoint] = useState(0);
  const [isMove, setMove] = useState(0);
  useEffect(() => {
    if (isQuestion < 5) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
        setMove(isMove + 1);
        setPoint(ispoint + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [seconds]);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handlePress = (index) => {
    setSelectedOption(index);
    if (
      questions[isQuestion].correctOption ==
      questions[isQuestion].options[selectedOption]
    ) {
      setMove(0);
    }
    setQuestion(isQuestion + 1);
    setSelectedOption(-1);
  };

  const questions = [
    {
      id: 0,
      question:
        "Which of the following points is/are true about Linked List data structure when it is compared with array?",
      options: [
        "Arrays have better cache locality",
        "It is easy to insert in Linked List",
        "All of the above",
      ],
      correctOption: "All of the above",
    },
    {
      id: 1,
      question:
        "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
      options: ["Insertion Sort", "Selection Sort", "Merge Sort"],
      correctOption: "Merge Sort",
    },
    {
      id: 2,
      question:
        "Suppose each set is represented as a linked list with elements in arbitrary order. Which of the operations among union, intersection, membership, cardinality will be the slowest? (GATE CS 2004)",
      options: ["union", "membership", "union,intersection"],
      correctOption: "union,intersection",
    },
    {
      id: 3,
      question: "In C, parameters are always ",
      options: ["Passed by value", "Passed by reference", "None"],
      correctOption: "Passed by value",
    },
    {
      id: 4,
      question:
        "Which of the following is true about return type of functions in C?",
      options: [
        "Functions can return any type",
        "Functions cannot return array and functions",
        "Functions can return array and functions",
      ],
      correctOption: "Functions cannot return array and functions",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={{
          uri: "https://img.freepik.com/premium-vector/purple-gradient-vector-background-design-colorised-red-purple-dark-wallpaper-template_293525-1111.jpg",
        }}
      >
        {isQuestion < 5 ? (
          <View>
            <View
              style={{
                height: height * 0.07,
                width: width * 0.2,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10%",
                marginLeft: "10%",
              }}
            >
              <Text
                style={{ color: "violet", fontSize: 16, fontWeight: "bold" }}
              >
                {ispoint}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: height * 0.7,
                width: width,
              }}
            >
              <View
                style={{
                  height: height * 0.7,
                  width: width * 0.45,
                  marginLeft: "10%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    textAlign: "left",
                    width: width * 0.4,
                    marginBottom: "10%",
                  }}
                >
                  {questions[isQuestion].question}
                </Text>
                {questions[isQuestion].options.map((item, index) => (
                  <TouchableOpacity
                    style={{
                      height: height * 0.07,
                      width: width * 0.4,
                      borderRadius: 10,
                      backgroundColor:
                        selectedOption == index ? "#ff00ff" : "white",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10%",
                    }}
                    onPress={handlePress}
                  >
                    <Text
                      style={{
                        color: "violet",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View
                style={{
                  height: height * 0.7,
                  width: width * 0.45,
                  backgroundColor: "green",
                  borderRadius: 20,
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <ImageBackground
                  style={{
                    height: height * 0.7,
                    width: width * 0.45,
                    backgroundColor: "green",
                    borderRadius: 20,
                    alignItems: "center",
                  }}
                  source={require("../assets/jungle.jpg")}
                >
                  <View style={{ justifyContent: "flex-start" }}>
                    <Image
                      source={require("../assets/monkey.png")}
                      style={{
                        height: height * 0.15,
                        width: width * 0.15,
                        marginTop: height * 0.02 + isMove * 20,
                      }}
                    />
                  </View>
                  <View
                    style={{ justifyContent: "flex-end", position: "absolute" }}
                  >
                    <Image
                      source={require("../assets/crocodile.png")}
                      style={{
                        height: height * 0.15,
                        width: width * 0.3,
                        marginTop: "270%",
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
        ) : (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 25,
                color: "#ff00ff",
                fontWeight: "bold",
                marginBottom: "5%",
              }}
            >
              CONGRATS !!
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
                marginBottom: "10%",
              }}
            >
              You have secured {ispoint} points!
            </Text>
            <TouchableOpacity
              style={{
                height: height * 0.1,
                width: width * 0.7,
                borderRadius: 20,
                backgroundColor: "#ff00ff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate("QuizStack");
              }}
            >
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default crocodileMonkeyGame;
