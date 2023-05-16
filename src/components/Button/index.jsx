import { Pressable, StyleSheet, Text } from "react-native";

export const EnterButton = ({ handleClickOK }) => {
  return (
    <Pressable style={styles.button} onPress={handleClickOK}>
      <Text style={{ color: "white", fontWeight: "bold" }}>Note</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 32,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
