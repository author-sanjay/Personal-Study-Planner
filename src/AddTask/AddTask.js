import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AddTask = () => {
  const [task, settask] = useState("");
  const [subject, setsubject] = useState("");
  const [day, setday] = useState("");
  const navigate = useNavigation();

  const handleaddtask = async () => {
    if (task.length > 0 && subject.length > 0 && day.length > 0) {
      const tasks = await AsyncStorage.getItem("tasks");
      if (tasks != null) {
        const taskarray = JSON.parse(tasks);
        taskarray.push({ task: task, subject: subject, day: day });
        await AsyncStorage.setItem("tasks", JSON.stringify(taskarray));

        navigate.goBack();
      } else {
        const taskarray = [];
        taskarray.push({ task: task, subject: subject, day: day });
        await AsyncStorage.setItem("tasks", JSON.stringify(taskarray));
        navigate.goBack();
      }
      const totaltasks = await AsyncStorage.getItem("totaltasks");
      if (totaltasks != null) {
        await AsyncStorage.setItem(
          "totaltasks",
          JSON.stringify(JSON.parse(totaltasks) + 1)
        );
      } else {
        await AsyncStorage.setItem("totaltasks", JSON.stringify(1));
      }
    }
  };
  return (
    <View
      style={{
        width: "100%",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text>Add Task</Text>
      <View
        style={{
          marginTop: 20,
          height: "auto",
          width: "70%",
          paddingLeft: 20,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 20,
        }}
      >
        <TextInput
          onChangeText={(e) => {
            settask(e);
          }}
          placeholder="Task"
          style={{
            borderColor: "black",
            width: "50%",
            // backgroundColor: "black",
            height: 30,
            fontSize: 20,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          height: "auto",
          width: "70%",
          paddingLeft: 20,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 20,
        }}
      >
        <TextInput
          onChangeText={(e) => {
            setsubject(e);
          }}
          placeholder="Subject"
          style={{
            borderColor: "black",
            width: "50%",
            // backgroundColor: "black",
            height: 30,
            fontSize: 20,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          height: "auto",
          width: "70%",
          paddingLeft: 20,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 20,
        }}
      >
        <TextInput
          onChangeText={(e) => {
            setday(e);
          }}
          placeholder="Day"
          style={{
            borderColor: "black",
            width: "50%",
            // backgroundColor: "black",
            height: 30,
            fontSize: 20,
          }}
        />
      </View>
      <TouchableOpacity onPress={handleaddtask}>
        <View
          style={{
            marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 20,
            backgroundColor: "skyblue",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text>Add Task</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;
