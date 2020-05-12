import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";
import BookedScreen from "../screens/BookedScreen";
import { THEME } from "../theme";
import PhotoIcon from "../components/PhotoIcon";
import BookedIcon from "../components/BookedIcon";

const PostNavigator = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <PostNavigator.Navigator
        // default settings for header
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
          options={{
            title: "Главный экран",
            headerRight: () => <PhotoIcon />,
          }}
        />
        <PostNavigator.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: "Главный экран",
            headerRight: () => <BookedIcon />,
          }}
        />
        <PostNavigator.Screen name="About" component={AboutScreen} />
        <PostNavigator.Screen name="Create" component={CreateScreen} />
        <PostNavigator.Screen name="Booked" component={BookedScreen} />
      </PostNavigator.Navigator>
    </NavigationContainer>
  );
};
