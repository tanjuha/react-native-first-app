import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemoveTodo }) => {

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onRemoveTodo(todo.id)}
    >
      <Text style={styles.item}>{todo.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    marginHorizontal: 10,
    color: "#777",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
  },
});

export default Todo;
