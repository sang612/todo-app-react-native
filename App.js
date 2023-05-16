import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Form } from "./src/components/Form";
import { EnterButton } from "./src/components/Button";
import { ItemGroup } from "./src/components/ItemGroup";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FilterButtonGroup } from "./src/components/FilterButtonGroup";
import { ActionButtonGroup } from "./src/components/ActionButtonGroup";

const todoList = [];

export default function App() {
  const [todoData, setTododata] = useState(todoList);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [finalTodoData, setFinalTodoData] = useState([]);
  const handleClickOK = () => {
    if (inputValue.trim().length == 0) return;
    setTododata((prev) => {
      const newVal = {
        id: uuidv4(),
        title: inputValue.trim(),
        status: "new",
      };
      return [...prev, newVal];
    });
  };
  const handleChangeStatus = (id) => {
    const updatedTodos = todoData.map((todo) =>
      todo.id === id
        ? { ...todo, status: todo.status === "new" ? "done" : "new" }
        : todo
    );
    setTododata(updatedTodos);
  };
  const handleClickFilterButton = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    if (filter === "all") {
      setFinalTodoData(todoData);
      return;
    }
    const filteredTodos = todoData.filter((item) => {
      return item.status === filter;
    });

    setFinalTodoData(filteredTodos);
  }, [filter, todoData]);

  const changeAll = (value) => {
    if (value === "new") {
      const updatedTodos = todoData.map((todo) => ({ ...todo, status: "new" }));
      setTododata(updatedTodos);
    } else if (value === "done") {
      const updatedTodos = todoData.map((todo) => ({
        ...todo,
        status: "done",
      }));
      setTododata(updatedTodos);
    } else if (value === "delete") setTododata([]);
  };

  return (
    <View style={styles.container}>
      <Form setInputValue={setInputValue} />
      <EnterButton handleClickOK={handleClickOK} />
      <ActionButtonGroup changeAll={changeAll} />
      <ItemGroup
        todoList={finalTodoData}
        handleChangeStatus={handleChangeStatus}
      />
      <FilterButtonGroup
        filter={filter}
        handleClickFilterButton={handleClickFilterButton}
      />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: 55,
  },
});
