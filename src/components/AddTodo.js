import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert('Todo title cannot be empty')
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setValue(text)}
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="numeric"
        style={styles.formControl}
        placeholder="Enter todo..."
      />
      <Button title="Create todo" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    margin: 10,
    height: 40,
    paddingLeft: 10,
    color: "blue",
  },
});

export default AddTodo;
