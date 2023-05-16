import { StyleSheet, ScrollView, Text } from "react-native";
import { Item } from "../Item";

export const ItemGroup = ({ todoList, handleChangeStatus }) => {
  return (
    <ScrollView style={styles.ItemGroup}>
      {todoList.length > 0 ? (
        todoList.map((item) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              status={item.status}
              id={item.id}
              handleChangeStatus={handleChangeStatus}
            />
          );
        })
      ) : (
        <Text style={styles.nothingText}>Nothing to do!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ItemGroup: {
    width: "100%",
    marginTop: 25,
  },
  nothingText: {
    color: "gray",
    fontStyle: "italic",
    fontSize: 18,
  },
});
