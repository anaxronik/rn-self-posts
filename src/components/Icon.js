import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Icon = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.icon}>
      {children}
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  },
});
