import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/MainScreen";
import { AppNavigation } from "./src/navigation/AppNavigation";

function App() {
  return <AppNavigation />;
}

export default App;
