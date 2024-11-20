import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import AnimatedTyping from "../components/AnimatedTyping";
const { width, height } = Dimensions.get("window");

const JobSelectionPage = ({ navigation }) => {
  
  const [characteristicsPara, setCharacteristicsPara] = useState([
    {
      description:
        "Analytical thinking and problem-solving are at the core of your skill set. You thrive in roles that require dissecting complex issues and finding effective solutions, whether it's in data analysis, engineering, or research.",
      jobroles: [
        "Data Scientist",
        "Artificial Intelligence/Machine Learning Engineer",
        "Cybersecurity Analyst",
      ],
    }]);

  

  const characteristics = [
    {
      description:
        "Analytical thinking and problem-solving are at the core of your skill set. You thrive in roles that require dissecting complex issues and finding effective solutions, whether it's in data analysis, engineering, or research.",
      jobroles: [
        "Data Scientist",
        "Artificial Intelligence/Machine Learning Engineer",
        "Cybersecurity Analyst",
      ],
    },
    {
      description:
        "Your compassionate nature drives your desire to make a meaningful impact in your work. Whether you're in healthcare, social services, or education, you excel in roles that allow you to connect with others and provide support and assistance.",
      jobroles: [
        "Healthcare Administrator",
        "Sustainability Consultant",
        "Content Creator/Influencer",
      ],
    },
    {
      description:
        "Creativity is your strong suit, and you enjoy bringing innovative ideas to life. Whether you're designing user interfaces, crafting marketing campaigns, or developing new products, your unique perspective and artistic flair set you apart.",
      jobroles: [
        "Software Developer",
        "Digital Marketing Specialist",
        "Content Creator/Influencer",
      ],
    },
    {
      description:
        "Leadership comes naturally to you, and you thrive in roles that allow you to inspire and motivate others. Whether you're managing projects, leading teams, or driving strategic initiatives, your ability to guide others towards success is unparalleled.",
      jobroles: [
        "Healthcare Administrator",
        "Sustainability Consultant",
        "Remote Work Facilitator",
      ],
    },
    {
      description:
        "Your practical mindset and technical skills make you well-suited for hands-on roles that involve building, fixing, or maintaining various systems and structures. Whether it's in engineering, construction, or manufacturing, you excel in tasks that require precision and attention to detail.",
      jobroles: [
        "Renewable Energy Engineer",
        "Sustainability Consultant",
        "Remote Work Facilitator",
      ],
    },
    {
      description:
        "Curiosity drives your thirst for knowledge and exploration. Whether you're conducting scientific research, investigating market trends, or delving into the latest technological advancements, you're always eager to uncover new insights and discoveries.",
      jobroles: [
        "Data Scientist",
        "Sustainability Consultant",
        "Remote Work Facilitator",
      ],
    },
  ];

  const generateRandomCharacteristics = () => {
    const randomIndex = Math.floor(Math.random() * characteristics.length);
    setCharacteristicsPara(characteristics[randomIndex]);
    return characteristics[randomIndex];
  };

  useEffect(() => {
    generateRandomCharacteristics();
  }, []);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const renderOptions = (questionIndex, options) => {
    return options.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={{
          minHeight: height * 0.06,
          width: width * 0.9,
          borderRadius: 7,
          borderWidth:(characteristicsPara && characteristicsPara.jobroles && characteristicsPara.jobroles.includes(item)) ? 4 : 0,
          backgroundColor:
            selectedOptions[questionIndex] === index ? "#ff00ff" : null,
          borderColor: (characteristicsPara && characteristicsPara.jobroles && characteristicsPara.jobroles.includes(item))
            ? "#ff00ff"
            : "#df4fb6",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "8%",
          paddingVertical:"3%"
        }}
        onPress={() => handleOptionSelect(questionIndex, index)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "semibold",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ));
  };

  const joblist = [
    "Data Scientist",
    "Artificial Intelligence/Machine Learning Engineer",
    "Cybersecurity Analyst",
    "Software Developer",
    "Digital Marketing Specialist",
    "Healthcare Administrator",
    "Sustainability Consultant",
    "Renewable Energy Engineer",
    "Content Creator/Influencer",
    "Remote Work Facilitator",
  ];

  const questions = [
    {
      id: 0,
      question: "Which of the following activities do you enjoy the most?",
      options: [
        "Working with numbers and data",
        "Helping others solve problems",
        "Being creative and expressing yourself",
        "Leading and organizing activities",
        "Working with tools, machines, or technology",
        "Exploring and understanding the natural world",
      ],
      correctOption: "",
    },
    {
      id: 1,
      question:
        "When faced with a challenge, which approach do you tend to take?",
      options: [
        "Analyze the situation and gather information",
        "Collaborate with others and seek their input",
        "Brainstorm multiple solutions and experiment",
        "Take charge and make decisions quickly",
        "Utilize available resources and troubleshoot",
        "Observe patterns and draw connections",
      ],
      correctOption: "",
    },
    {
      id: 2,
      question:
        "Which of the following work environments appeals to you the most?",
      options: [
        "Structured and organized",
        "Supportive and cooperative",
        "Dynamic and innovative",
        "Goal-oriented and competitive",
        "Hands-on and practical",
        "Open-minded and exploratory",
      ],
      correctOption: "",
    },
    {
      id: 3,
      question: "What type of tasks do you find most fulfilling?",
      options: [
        "Analyzing data and solving complex problems",
        "Assisting and supporting others in need",
        "Creating and designing new products or solutions",
        "Leading and managing projects or teams",
        "Building or repairing physical objects",
        "Researching and exploring new concepts or phenomena",
      ],
      correctOption: "",
    },
    {
      id: 4,
      question:
        "When considering your career, which aspect is most important to you?",
      options: [
        "Opportunities for advancement and recognition",
        "Making a positive impact on people's lives",
        "Freedom to express your creativity and ideas",
        "Having control and authority over your work",
        "Working with cutting-edge technology or equipment",
        "Continuously learning and discovering new things",
      ],
      correctOption: "",
    },
    {
      id: 5,
      question: "Which of the following statements describes you best?",
      options: [
        "I enjoy working with my hands and being physically active.",
        "I like to analyze and solve complex problems.",
        "I am drawn to creative activities and self-expression.",
        "I enjoy interacting and collaborating with others.",
        "I am ambitious and enjoy taking on leadership roles.",
        "I prefer working with systems and established methods.",
      ],
      correctOption: "",
    },
    {
      id: 6,
      question: "What motivates you the most in your work?",
      options: [
        "Achieving tangible results and seeing progress.",
        "Helping others and making a difference in their lives.",
        "Expressing myself and my unique perspective.",
        "Having influence and making decisions that impact others.",
        "Working with cutting-edge technology and innovation.",
        "Following structured processes and procedures.",
      ],
      correctOption: "",
    },
    {
      id: 7,
      question: "Which of the following activities do you find most enjoyable?",
      options: [
        "Working with machinery or equipment.",
        "Conducting research and experiments.",
        "Creating art, music, or writing.",
        "Networking and building relationships.",
        "Pitching ideas and closing deals.",
        "Organizing and managing tasks or projects.",
      ],
      correctOption: "",
    },
    {
      id: 8,
      question: "How do you prefer to learn new things?",
      options: [
        "Hands-on experience and trial-and-error.",
        "Reading and studying information in-depth.",
        "Experimenting and trying out new approaches.",
        "Discussing ideas and collaborating with others.",
        "Taking on new challenges and responsibilities.",
        "Following structured courses and materials.",
      ],
      correctOption: "",
    },
    {
      id: 9,
      question: "Which of the following career paths interests you the most?",
      options: [
        "Mechanical engineering, construction, or farming.",
        "Scientific research, data analysis, or academia.",
        "Graphic design, writing, or performing arts.",
        "Counseling, teaching, or healthcare.",
        "Entrepreneurship, sales, or management.",
        "Finance, administration, or project management.",
      ],
      correctOption: "",
    },
    {
      id: 10,
      question: "What role do you typically play in group settings?",
      options: [
        "The problem-solver who offers practical solutions.",
        "The researcher who explores various options and possibilities.",
        "The artist who brings creativity and imagination to the table.",
        "The mediator who resolves conflicts and fosters cooperation.",
        "The leader who motivates and directs the team towards goals.",
        "The organizer who plans and coordinates tasks efficiently.",
      ],
      correctOption: "",
    },
    {
      id: 11,
      question:
        "What aspect of work environment is crucial for your productivity?",
      options: [
        "Having access to necessary tools and resources.",
        "Having a supportive and collaborative team.",
        "Having opportunities for innovation and creativity.",
        "Having clear goals and objectives to work towards.",
        "Having autonomy and control over my tasks.",
        "Having structured processes and procedures in place.",
      ],
      correctOption: "",
    },
    {
      id: 12,
      question:
        "Which of the following job characteristics do you value the most?",
      options: [
        "Hands-on work and physical activity.",
        "Intellectual challenge and problem-solving.",
        "Artistic expression and creativity.",
        "Interpersonal interaction and helping others.",
        "Leadership opportunities and influence.",
        "Stability and predictability.",
      ],
      correctOption: "",
    },
    {
      id: 13,
      question: "What would you consider a fulfilling career achievement?",
      options: [
        "Completing a challenging project or task successfully.",
        "Receiving recognition for your contributions.",
        "Producing a piece of art or creative work.",
        "Making a significant difference in someone's life.",
        "Achieving a leadership position or promotion.",
        "Establishing a stable and secure career path.",
      ],
      correctOption: "",
    },
    {
      id: 14,
      question: "Which of the following work environments do you thrive in?",
      options: [
        "Dynamic and fast-paced environments.",
        "Stable and supportive environments.",
        "Creative and innovative environments.",
        "Collaborative and team-oriented environments.",
        "Competitive and goal-driven environments.",
        "Structured and organized environments.",
      ],
      correctOption: "",
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(-1)
  ); // Initialize array to store selected options for each question

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={{
          uri: "https://img.freepik.com/premium-vector/purple-gradient-vector-background-design-colorised-red-purple-dark-wallpaper-template_293525-1111.jpg",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              alignSelf: "center",
              marginBottom: "7%",
              marginTop: "12%",
            }}
          >
            Your Report
          </Text>
         {characteristicsPara && characteristicsPara.description?( <AnimatedTyping
                text={[
                    characteristicsPara.description
                ]}
              />):null}
          {/* <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "justify",
              width: width * 0.9,
            }}
          >
            {characteristicsPara.description}
            {"\n"}
          </Text> */}
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              width: width * 0.9,
              marginBottom: "10%",
              fontWeight:"bold"
            }}
          >You fit well for the highlighted roles !
          </Text>
          {renderOptions(currentQuestionIndex, joblist)}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={{
                height: height * 0.08,
                width: width * 0.4,
                borderRadius: 20,
                backgroundColor: "#ff00ff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={()=>{navigation.navigate("Navigation")}}
            >
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Select
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default JobSelectionPage;
