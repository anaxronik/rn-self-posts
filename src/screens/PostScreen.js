import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { DATA } from "../data";
import { ScrollView } from "react-native-gesture-handler";

const PostScreen = ({ route }) => {
  const postID = route.params.postID;

  const post = DATA.find((p) => p.id === postID);

  const deleteHandler = () => {
    Alert.alert(
      "Удалить пост?",
      "Вы уверенны?",
      [
        {
          text: "Отменить",
          style: "cancel",
        },
        { text: "УДАЛИТЬ", onPress: () => console.log("delete handler") },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.post}>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}> {post.text}</Text>
        <Button title={"УДАЛИТЬ"} onPress={deleteHandler} />
      </View>
    </ScrollView>
  );
};

PostScreen.title = `Пост `;

export default PostScreen;

const styles = StyleSheet.create({
  post: {},
  image: {
    width: "100%",
    height: 200,
  },
  textWrapper: {
    padding: 10,
  },
  text: {
    // fontFamily: "open-regular",
  },
});
