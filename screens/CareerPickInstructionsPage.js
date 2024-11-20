import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
const CareerPickInstrutionsPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={{
          uri: "https://img.freepik.com/premium-vector/purple-gradient-vector-background-design-colorised-red-purple-dark-wallpaper-template_293525-1111.jpg",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: "10%",
            textAlign:"center"
          }}
        >
          Advanced Career Builder
        </Text>
        <Text
  style={{
    color: "white",
    textAlign: "justify",
    fontSize: 16,
    width: width * 0.9,
  }}
>
  Welcome to our career assessment tool!{"\n\n"}
  By completing our questionnaire, you're embarking on a journey to discover your top three career matches.{"\n\n"}
  Our innovative analysis utilizes the RIASEC model, which assesses your personality traits and interests across six dimensions: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional.{"\n\n"}
  As you answer our thoughtfully crafted questions, our algorithm works behind the scenes to evaluate your responses and identify the careers that best align with your unique strengths and preferences.{"\n\n"}
  Whether you're a hands-on problem-solver, a creative visionary, or a natural leader, our tool will unveil personalized career recommendations tailored just for you.{"\n\n"}
  Get ready to unlock exciting opportunities and take the next step towards a fulfilling career path!
</Text>
        <TouchableOpacity
          style={{
            height: height * 0.07,
            width: width * 0.4,
            backgroundColor: "white",
            borderRadius: 30,
            alignSelf: "center",
            marginTop: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("CareerQuestionnairePage");
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "purple" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default CareerPickInstrutionsPage;
