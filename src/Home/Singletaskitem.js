import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";

const Singletaskitem = ({ task }) => {
  const deleteTaskFromLocalStorage = async () => {
    try {
      const taskToDelete = task;
      const currentData = await AsyncStorage.getItem("tasks");
      console.log(taskToDelete);

      if (!currentData) {
        return;
      }
      const parsedData = JSON.parse(currentData);
      const updatedData = parsedData.filter((task) => {
        return (
          task.task !== taskToDelete.task ||
          task.subject !== taskToDelete.subject ||
          task.day !== taskToDelete.day
        );
      });
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedData));
      const tasksdone = await AsyncStorage.getItem("done");
      if (tasksdone != null) {
        await AsyncStorage.setItem(
          "done",
          JSON.stringify(JSON.parse(tasksdone) + 1)
        );
      } else {
        await AsyncStorage.setItem("done", JSON.stringify(1));
      }

      const lastattempt = await AsyncStorage.getItem("lastwork");
      if (lastattempt != null) {
        const oneDayAgo = moment().subtract(1, "days");

        if (moment(lastattempt).isBefore(oneDayAgo)) {
          // The last attempt was 1 day ago
          await AsyncStorage.setItem(
            "lastwork",
            JSON.stringify(moment().format())
          );
          await AsyncStorage.setItem("streak", JSON.stringify(1));
        } else {
          await AsyncStorage.setItem(
            "lastwork",
            JSON.stringify(moment().format())
          );
          const streak = await AsyncStorage.getItem("streak");
          await AsyncStorage.setItem("streak", JSON.stringify(streak + 1));
        }
      } else {
        await AsyncStorage.setItem(
          "lastwork",
          JSON.stringify(moment().format())
        );
        await AsyncStorage.setItem("streak", JSON.stringify(1));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={deleteTaskFromLocalStorage}>
      <View
        onTouchStart={async () => {
          console.log("HI");
          deleteTaskFromLocalStorage();
        }}
        style={{
          marginBottom: 15,
          width: "100%",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18 }}>Task: {task.task}</Text>
          <Text style={{ fontSize: 18, paddingLeft: 20 }}>
            Subject: {task.subject}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Day: {task.day}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Singletaskitem;
