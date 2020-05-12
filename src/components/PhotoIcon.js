import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { THEME } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "./Icon";

const PhotoIcon = () => {
  const onPressHandler = () => {
    console.log("Press on PhotoIcon");
  };

  return (
    <Icon onPress={onPressHandler}>
      <MaterialIcons name="add-a-photo" size={28} color="white" style />
    </Icon>
  );
};

export default PhotoIcon;
