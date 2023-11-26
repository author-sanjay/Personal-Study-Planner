import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home/Home";
import Tasks from "./src/Home/Tasks";
import Challenge from "./src/Home/Challenge";
import AddTask from "./src/AddTask/AddTask";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tasks"
          component={Tasks}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Challenge"
          component={Challenge}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddTask"
          component={AddTask}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
