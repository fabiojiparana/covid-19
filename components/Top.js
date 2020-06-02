import React from "react";
import { View, Image, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#2C3252",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    })
  },
  imagem: {
    height: 58,
    resizeMode: "contain",
    width: "100%"
  }
});
export default function components() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/top.png")}
        style={styles.imagem}
      ></Image>
    </View>
  );
}
