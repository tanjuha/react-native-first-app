import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import AddTodo from "./src/components/AddTodo";
import ListTodo from "./src/components/ListTodo";
import NavBar from "./src/components/NavBar";

const data = [
  {
    id:"1",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  }
];

export default function App() {
  const [todos, setTodos] = useState(data);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
   setTodos((prev) => prev.filter((todo) => todo.id !== id) )
  }

  return (
    <View>
      <NavBar title={"top app"} />
      <AddTodo onSubmit={addTodo} />
      <ListTodo list={todos} onRemoveTodo={removeTodo} />
      <StatusBar style="auto" />
    </View>
  );
}
