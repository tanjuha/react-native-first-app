import React from "react";
import { FlatList } from "react-native";
import Todo from "./Todo"

export const ListTodo = ({ list }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={list.id}
      renderItem={({ item }) => (<Todo todo={item} />)}
    />
  );
};

export default ListTodo;
