import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function AnimatedTyping(props) {
  const [text, setText] = useState("");
  const [cursorColor, setCursorColor] = useState("transparent");
  const [messageIndex, setMessageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const textRef = useRef(text);
  textRef.current = text;

  const cursorColorRef = useRef(cursorColor);
  cursorColorRef.current = cursorColor;

  const messageIndexRef = useRef(messageIndex);
  messageIndexRef.current = messageIndex;

  const textIndexRef = useRef(textIndex);
  textIndexRef.current = textIndex;

  useEffect(() => {
    const typingAnimation = () => {
      if (messageIndexRef.current < props.text.length) {
        const nextText = props.text[messageIndexRef.current].substring(0, textIndexRef.current + 8); // Add 3 letters at a time
        setText(nextText);
        setTextIndex(textIndexRef.current + 8); // Increment by 3

        if (nextText.length < props.text[messageIndexRef.current].length) {
          setTimeout(typingAnimation, 50); // Adjust typing speed here
        } else {
          setMessageIndex(messageIndexRef.current + 1);
          setTextIndex(0);
        }
      } else {
        setCursorColor("transparent");
        if (props.onComplete) {
          props.onComplete();
        }
      }
    };

    const cursorAnimation = () => {
      setCursorColor((prevColor) => (prevColor === "transparent" ? "#8EA960" : "transparent"));
    };

    const cursorInterval = setInterval(cursorAnimation, 250);
    const typingTimeout = setTimeout(typingAnimation, 500);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <Text style={[styles.text]}>
      {text}
      <Text style={{ color: cursorColor, fontSize: 35 }}>|</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
    textAlign: "justify",
    width: width * 0.9,
    marginBottom:"7%"
  }
});
