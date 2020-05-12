import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";
import BookedScreen from "../screens/BookedScreen";
import { THEME } from "../theme";

const PostNavigator = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <PostNavigator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.MAIN_COLOR,
          },
          headerTintColor: "#fff",
        }}
      >
        <PostNavigator.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Главный экран" }}
        />
        <PostNavigator.Screen
          name="Post"
          component={PostScreen}
          options={{ title: PostScreen.title }}
        />
        <PostNavigator.Screen name="About" component={AboutScreen} />
        <PostNavigator.Screen name="Create" component={CreateScreen} />
        <PostNavigator.Screen name="Booked" component={BookedScreen} />
      </PostNavigator.Navigator>
    </NavigationContainer>
  );
};
