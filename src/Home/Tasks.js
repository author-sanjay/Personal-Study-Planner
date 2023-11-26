import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Fontisto";
import Icons from "react-native-vector-icons/Ionicons";
import TasksList from "./TasksList";
import { useNavigation } from "@react-navigation/native";

const Tasks = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          paddingLeft: 10,
          paddingRight: 10,
          top: 20,
          left: 0,
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "5%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <Icon name="stopwatch" size={20} />
        </TouchableOpacity>
        <Text>Tasks</Text>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate("AddTask");
          }}
        >
          <Icons name="add" size={25} />
        </TouchableOpacity>
      </View>
      <TasksList />
    </View>
  );
};

export default Tasks;
