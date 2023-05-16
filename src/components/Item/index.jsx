import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Item = ({ title, status, handleChangeStatus, id }) => {
  const itemStyle = [styles.view];

  if (status === "done") {
    itemStyle.push(styles.doneView);
  }

  return (
    <TouchableOpacity onPress={() => handleChangeStatus(id)}>
      <View style={itemStyle}>
        <Text>{title}</Text>
        {status === "done" && (
          <View style={styles.line}>
            <Text style={styles.doneText}>done</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    position: "relative",
  },
  doneView: {
    borderColor: "black",
  },
  line: {
    zIndex: 999,
    position: "absolute",
    top: 2,
    right: 20,
    transform: [{ rotate: "-40deg" }, { scale: 1.3 }],
  },
  doneText: {
    fontWeight: "bold",
    color: "#cbcbcb",
    fontSize: 22,
    zIndex: 999,
  },
});
