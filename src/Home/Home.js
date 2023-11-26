import { View, Text, Image } from "react-native";
import React from "react";
import img from "../../dp.jpeg";
import Profile from "./Profile";
import Tasks from "./Tasks";
import Challenge from "./Challenge";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile />

      <Challenge />
    </View>
  );
};

export default Home;
