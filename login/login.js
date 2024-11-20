import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    StatusBar,
    Keyboard,
    Text,
  } from "react-native";
  import React, { useRef, useState, useEffect } from "react";
  import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
  import { firebaseConfig } from "../config";
  import firebase from "firebase/compat/app";
  import { useNavigation } from "@react-navigation/native";
  import Feather from "@expo/vector-icons/Feather";
  
  const PhoneNumberInput = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const recaptchaVerifier = useRef(null);
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        () => {
          setKeyboardOpen(true);
        }
      );
  
      const keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        () => {
          setKeyboardOpen(false);
        }
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
  
    const sendVerification = () => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then((id) => {
          setVerificationId(id);
          navigation.navigate("OTP", {
            verificationId: id,
            phoneNumber: phoneNumber,
          });
        })
        .catch((error) => {
          alert(error.message);
        });
    };
  
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"purple"} barStyle={"dark-content"} />
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/purple-gradient-vector-background-design-colorised-red-purple-dark-wallpaper-template_293525-1111.jpg",
          }}
          style={styles.backgroundImage}
        />
         <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        /> 
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.otpText}>Login</Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 10,
              borderColor: "purple",
              borderWidth: 1,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 35,
              marginBottom: 35,
            }}
          >
            <Feather name="phone" size={20} color="purple" style={styles.icon1} />
            <TextInput
              placeholder="Phone Number"
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              autoCompleteType="tel"
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={sendVerification}
            style={[
              styles.loginButton,
              { backgroundColor: phoneNumber ? "purple" : "#c7c7c7" },
            ]}
            disabled={!phoneNumber}
          >
            <Text
              style={[
                styles.buttonText,
                { color: phoneNumber ? "white" : "purple" },
              ]}
            >
              Get OTP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("QuestionsNavi")}
            activeOpacity={0.5}
            style={[
              styles.loginButton,
              {
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "white",
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              Skip Login
            </Text>
          </TouchableOpacity>
        </View>
        {!keyboardOpen && (
          <View style={[styles.bottom, { bottom: 100 }]}>
            <Text style={styles.tex1}>Don't have an account?</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[styles.text, { fontSize: 14, color: "pink" }]}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  
  export default PhoneNumberInput;
  
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: "#000",
      justifyContent: "center",
    },
    textInput: {
      flex: 1,
      height: 60,
      color: "purple",
      paddingLeft: 20,
      fontFamily: "MetropolisRegular",
    },
    buttonText: {
      color: "purple",
      fontSize: 20,
    },
    otpText: {
      fontSize: 40,
      color: "white",
      marginBottom: 5,
      marginLeft: 30,
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
      marginLeft: 20,
      marginTop: 20,
    },
    loginButton: {
      borderRadius: 10,
      height: 50,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      height: 25,
      width: 25,
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
    text: {
      fontSize: 16,
      color: "purple",
      marginLeft: 5,
    },
    tex1: {
      color: "#fff",
    },
  });
  