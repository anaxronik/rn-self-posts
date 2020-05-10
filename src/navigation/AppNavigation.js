import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";
import BookedScreen from "../screens/BookedScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Мой блог" }}
        />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Booked" component={BookedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
