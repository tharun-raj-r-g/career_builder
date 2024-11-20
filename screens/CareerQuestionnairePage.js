import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const CareerQuestionnairePage = ({ navigation }) => {

    
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
                    borderWidth: 2,
                    backgroundColor:selectedOptions[questionIndex] === index ? "#ff00ff" : null,
                    borderColor: selectedOptions[questionIndex] === index ? "#ff00ff" : "#df4fb6",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10%",
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
            question: "When faced with a challenge, which approach do you tend to take?",
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
            question: "Which of the following work environments appeals to you the most?",
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
            question: "When considering your career, which aspect is most important to you?",
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
            question: "What aspect of work environment is crucial for your productivity?",
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
            question: "Which of the following job characteristics do you value the most?",
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

    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(-1)); // Initialize array to store selected options for each question

    

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
            <View>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "white",
                        alignSelf: "center",
                        marginBottom: "5%",
                    }}
                >
                    Question {currentQuestionIndex + 1}/{questions.length}
                </Text>
                <Text
                    style={{
                        color: "white",
                        fontSize: 18,
                        textAlign: "justify",
                        width: width * 0.9,
                        marginBottom: "10%",
                    }}
                >
                    {questions[currentQuestionIndex].question}
                </Text>
                {renderOptions(currentQuestionIndex, questions[currentQuestionIndex].options)}
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    {currentQuestionIndex !== 0 && (
                        <TouchableOpacity
                            style={{
                                height: height * 0.08,
                                width: width * 0.4,
                                borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth:2,
                                borderColor:"white"
                            }}
                            onPress={handlePrev}
                        >
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Previous</Text>
                        </TouchableOpacity>
                    )}
                    {currentQuestionIndex !== questions.length - 1 && (
                        <TouchableOpacity
                            style={{
                                height: height * 0.08,
                                width: width * 0.4,
                                borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth:2,
                                borderColor:"white"
                            }}
                            onPress={handleNext}
                        >
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Next</Text>
                        </TouchableOpacity>
                    )}
                    {currentQuestionIndex === questions.length - 1 && (
                        <TouchableOpacity
                            style={{
                                height: height * 0.08,
                                width: width * 0.4,
                                borderRadius: 20,
                                backgroundColor: "#ff00ff",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={()=>{navigation.navigate("JobSelectionPage")}}
                        >
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Submit</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ImageBackground>
    </View>
);
};

export default CareerQuestionnairePage;