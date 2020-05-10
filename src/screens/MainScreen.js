import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
