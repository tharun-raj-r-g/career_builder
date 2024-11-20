import { View, Text, TouchableOpacity,ImageBackground } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const TaskListComponent = (props) => {
  return (
    <View
      style={{
        flex: 4,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: props.taskdata["skills"][props.id].color,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 40,
            width: 60,
            borderRadius: 20,
            backgroundColor: "white",
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            elevation: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 25,
              alignSelf: "center",
            }}
          >
            {props.item.date}
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            alignSelf: "center",
          }}
        >
          {props.item.month}
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 15,
            alignSelf: "center",
          }}
        >
          {props.item.year}
        </Text>
      </View>

      <View style={{ flex: 3 }}>
        {props.item.tasks.map((item,index) => (
            <TouchableOpacity onPress={()=>props.navigation.navigate("TaskDetailsPage",{tasks:item,color:props.taskdata["skills"][props.id].color})}>
          <View
            style={{
              borderBottomWidth: props.index==props.taskdata["skills"][props.id]["weektasks"].length-1 && index==props.item.tasks.length-1?0:1,
              borderBottomColor:index==props.item.tasks.length-1?"black": props.taskdata["skills"][props.id].color,
              height: height * 0.1,
              width: width * 0.75,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              
            }}
          >
            
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                flex: 1,
                marginLeft: 20,
                color: "white",
              }}
            >
              {item.taskname}
            </Text>
            <View
              style={{
                height: 30,
                width: 50,
                backgroundColor: props.taskdata["skills"][props.id].color,
                marginRight: 20,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                elevation: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
              }}
            >
              <Text style={{ color: "black" }}>Deets</Text>
            </View>
            
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TaskListComponent;
