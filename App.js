import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // preloader function
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
