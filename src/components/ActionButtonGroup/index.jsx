import { StyleSheet, Text, View } from "react-native";
import { FilterButton } from "../FilterButtonGroup/FilterButton";

export const ActionButtonGroup = ({ changeAll }) => {
  return (
    <View style={styles.actionButtonGroup}>
        <Text>Make all: </Text>
      <FilterButton
        text="New"
        value="new"
        changeAll={changeAll}
        type="change"
      />
      <FilterButton
        text="Done"
        value="done"
        changeAll={changeAll}
        type="change"
      />
      <Text style={{fontSize: 22, marginHorizontal: 4}}>|</Text>
       <FilterButton
        text="Delete all"
        value="delete"
        changeAll={changeAll}
        type="change"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonGroup: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    alignItems: 'center'
  },
});
