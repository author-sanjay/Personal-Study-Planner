import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import img from "../../dp.jpeg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [taskcompleted, settaskCompleted] = useState(0);
  const [streak, setstreak] = useState(0);
  useEffect(() => {
    gettaskedcompleted();
    const intervalId = setInterval(() => {
      gettaskedcompleted();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const gettaskedcompleted = async () => {
    const taskcompleted = await AsyncStorage.getItem("done");
    const streak = await AsyncStorage.getItem("streak");
    if (streak == null) {
      setstreak(0);
    } else {
      setstreak(streak);
    }
    settaskCompleted(taskcompleted);
  };
  return (
    <View>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={img}
          style={{ width: 120, height: 120, borderRadius: 70 }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          width: "50%",
          display: "flex",
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Sanjay Kumar</Text>
        <Text style={{ fontSize: 15 }}>21</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "70%",
          marginTop: 20,
        }}
      >
        <View style={{ paddingRight: 20 }}>
          <Text style={{ fontSize: 15 }}>Streak</Text>
          <Text style={{ fontSize: 20 }}>{streak}</Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontSize: 15 }}>Tasks</Text>
          <Text style={{ fontSize: 20 }}> {taskcompleted}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
