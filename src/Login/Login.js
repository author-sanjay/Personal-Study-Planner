import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [clicked, setclicked] = useState(false);
  const [registered, setregistered] = useState(false);

  useEffect(() => {
    checklogin();
  }, []);
  const checklogin = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      navigation.navigate("Home");
    }
  };
  const handlelogin = async () => {
    if (email && password) {
      const user = { email: email, password: password };
      await AsyncStorage.setItem("user", JSON.stringify(user));
    }
    navigation.navigate("Home");
  };
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
      {registered ? (
        <View
          onTouchEnd={() => {
            setregistered(!registered);
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "300" }}>Register</Text>
        </View>
      ) : (
        <View
          onTouchEnd={() => {
            setregistered(!registered);
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "300" }}>Login</Text>
        </View>
      )}

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
            setemail(e);
          }}
          placeholder="Email"
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
          marginTop: 10,
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
            setpassword(e);
          }}
          placeholder="Password"
          style={{
            borderColor: "black",
            width: "50%",
            // backgroundColor: "black",
            height: 30,
            fontSize: 20,
          }}
        />
      </View>
      {registered ? (
        <TouchableOpacity onPress={handlelogin}>
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
            <Text>Register</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlelogin}>
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
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Login;
