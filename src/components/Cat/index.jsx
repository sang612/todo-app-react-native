import { Image, Text, View } from "react-native";

const Cat = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat1.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ textAlign: "center" }}>Hello, I am cat</Text>
    </View>
  );
};

export default Cat;
