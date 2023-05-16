import { Pressable, StyleSheet, Text } from "react-native";

export const FilterButton = ({
  text,
  value,
  filter,
  handleClickFilterButton,
  changeAll,
  type,
}) => {
  const filterButtonStyle = [styles.filterButton];
  const textStyle = [];
  if (filter === value) {
    filterButtonStyle.push(styles.active);
    textStyle.push(styles.activeText);
  }

  return (
    <Pressable
      style={filterButtonStyle}
      onPress={() => {
        if (type === "filter") {
          handleClickFilterButton(value);
        } else if (type === "change") {
          changeAll(value);
        }
      }}
    >
      <Text style={textStyle} numberOfLines={1}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    marginHorizontal: 2,
    backgroundColor: "transparent",
    padding: 5,
    minWidth: 55,
    alignItems: "center",
    borderRadius: 8,
    borderColor: "green",
    borderWidth: 1,
  },
  active: {
    backgroundColor: "green",
  },
  activeText: {
    color: "white",
    fontWeight: "bold",
  },
});
