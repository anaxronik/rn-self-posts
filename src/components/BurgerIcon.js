import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "./Icon";

const BurgerIcon = ({ booked = false }) => {
  const onPressHandler = () => {
    console.log("Press on BurgerIcon");
  };

  return (
    <Icon onPress={onPressHandler}>
      <MaterialIcons name="dehaze" size={28} color="white" />
    </Icon>
  );
};

export default BurgerIcon;
