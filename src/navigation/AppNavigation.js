import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import MainScreen from "../screens/MainScreen";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: { screen: PostScreen },
  },
  { initialRouteName: "Main" }
);

export const AppNavigation = NavigationContainer(PostNavigator);
