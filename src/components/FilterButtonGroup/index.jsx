import { StyleSheet, View } from "react-native";
import { FilterButton } from "./FilterButton";

export const FilterButtonGroup = ({ filter, handleClickFilterButton }) => {
  return (
    <View style={styles.filterButtonGroup}>
      <FilterButton
        text="All"
        value="all"
        filter={filter}
        handleClickFilterButton={handleClickFilterButton}
        type="filter"
      />
      <FilterButton
        text="New"
        value="new"
        filter={filter}
        handleClickFilterButton={handleClickFilterButton}
        type="filter"
      />
      <FilterButton
        text="Done"
        value="done"
        filter={filter}
        handleClickFilterButton={handleClickFilterButton}
        type="filter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterButtonGroup: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
  },
});
