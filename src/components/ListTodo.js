import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export const ListTodo = ({ list }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={list.id}
      renderItem={({ item }) => (
        <Text style={styles.item} key={item.id}>
          {item.title}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    color: "#777",
  },
});

export default ListTodo;
