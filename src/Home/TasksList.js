import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Singletaskitem from "./Singletaskitem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TasksList = () => {
  const [tasklist, settasklist] = useState([]);
  useEffect(() => {
    gettasks();
    const intervalId = setInterval(() => {
      gettasks();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const gettasks = async () => {
    const tasks = await AsyncStorage.getItem("tasks");
    settasklist(JSON.parse(tasks));
  };
  return (
    <ScrollView
      style={{ marginTop: 70 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          width: "100%",
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        {tasklist.map((task) => {
          return <Singletaskitem task={task} />;
        })}
      </View>
    </ScrollView>
  );
};

export default TasksList;
