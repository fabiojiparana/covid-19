import * as React from "react";
import { Text } from "react-native";

export function MonoText(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "Roboto-Medium",
          fontSize: 20,
          color: "rgba(251, 179, 75,0.7)"
        }
      ]}
    />
  );
}
