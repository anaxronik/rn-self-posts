import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MainScreen = ({ navigation }) => {
  const goToPost = (params) => {
    console.log("goToPost", navigation.navigate);
    navigation.navigate("Post");
  };

  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button title="GO TO POST" onPress={goToPost} />
    </View>
  );
};

MainScreen.title = "Мой блог";

export default MainScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
