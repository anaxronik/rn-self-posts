import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "./Icon";

const BookedIcon = ({ booked = false }) => {
  const onPressHandler = () => {
    console.log("Press on BookedIcon");
  };

  return (
    <Icon onPress={onPressHandler}>
      {!booked ? (
        <MaterialIcons name="star-border" size={28} color="white" />
      ) : (
        <MaterialIcons name="star" size={28} color="white" />
      )}
    </Icon>
  );
};

export default BookedIcon;
