import { TextInput, StyleSheet } from "react-native";

export const Form = ({ setInputValue, handleClickOK, inputValue }) => {
  return (
    <TextInput
      onChangeText={(newText) => setInputValue(newText)}
      onSubmitEditing={handleClickOK}
      value={inputValue}
      style={styles.input}
      placeholder="What you want to do...?"
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
  },
});
