import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./src/components/NavBar";

export default function App() {
  return (
    <View>
      <NavBar title={"top app"} />
      <Text style={styles.text}>Hello Tom!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 100,
  },
});
