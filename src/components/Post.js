import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Post = ({ post }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("onPress POST", post.id);
      }}
    >
      <View style={styles.post}>
        <ImageBackground source={{ uri: post.img }} style={styles.image}>
          <View style={styles.textWrap}>
            <Text style={styles.text}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },
  image: { width: "100%", height: 200 },
  textWrap: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
