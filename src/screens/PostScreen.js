import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.center}>
      <Text>PostScreen</Text>
    </View>
  );
};

PostScreen.title = `пост № ${Date.now()}`;

export default PostScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
