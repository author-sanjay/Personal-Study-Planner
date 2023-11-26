import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Challenge = () => {
  const [streak, setstreak] = useState(0);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Tasks");
      }}
    >
      <View
        style={{
          marginTop: 50,
          width: "100%",
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25 }}>12/180</Text>
        <Text>for Exam</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Challenge;
