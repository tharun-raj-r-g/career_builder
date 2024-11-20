import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
const QuizInstructionsPage = ({ navigation }) => {
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
            alignSelf: "flex-start",
            marginLeft: "6%",
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: "5%",
          }}
        >
          INSTRUCTIONS
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            fontSize: 16,
            width: width * 0.9,
          }}
        >
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
          bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer
          in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
          Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
          Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
          sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat
          turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec
          ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin
          vitae facilisis nisi, ac posuere leo.
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
            navigation.navigate("QuestionnairePage");
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

export default QuizInstructionsPage;
