import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DATA } from "../data";
import Post from "../components/Post";

const MainScreen = ({ navigation }) => {
  const goToPost = (post) => {
    navigation.navigate("Post", {
      postID: post.id,
      postTitle: `Пост от ${new Date(post.date).toLocaleDateString()}`,
      postIsBooked: post.booked,
    });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={goToPost} />}
      />
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
  wrapper: { padding: 10 },
});
