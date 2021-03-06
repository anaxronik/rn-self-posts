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
import BurgerIcon from "../components/BurgerIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const BottomTabsNavigator = createBottomTabNavigator();
const PostNavigator = createStackNavigator();

const PostNavigatorContainer = () => (
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
        headerLeft: () => <BurgerIcon />,
      }}
    />
    <PostNavigator.Screen
      name="Post"
      component={PostScreen}
      options={({ route }) => ({
        title: route.params.postTitle,
        headerRight: () => <BookedIcon booked={route.params.postIsBooked} />,
      })}
    />
    <PostNavigator.Screen name="About" component={AboutScreen} />
    <PostNavigator.Screen name="Create" component={CreateScreen} />
    <PostNavigator.Screen name="Booked" component={BookedScreen} />
  </PostNavigator.Navigator>
);

const BookedPostNavigatorContainer = () => (
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
      component={BookedScreen}
      options={{
        title: "Избранное",
      }}
    />
  </PostNavigator.Navigator>
);

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator.Navigator
        tabBarOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          headerStyle: {
            backgroundColor: THEME.MAIN_COLOR,
          },
        }}
      >
        <BottomTabsNavigator.Screen
          name="POST"
          component={PostNavigatorContainer}
          options={{
            tabBarLabel: "ПОСТЫ",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="chat" size={size} color={color} />
            ),
          }}
        />
        <BottomTabsNavigator.Screen
          name="BOOKED"
          component={BookedPostNavigatorContainer}
          options={{
            title: "Избранное",
            tabBarLabel: "ИЗБРАННОЕ",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="star" size={size} color={color} />
            ),
          }}
        />
      </BottomTabsNavigator.Navigator>
    </NavigationContainer>
  );
};
