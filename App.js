import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // <div> 대신 <View>를 사용, 모든 텍스트는 <Text> 안에 써 주어야 한다!
    <View style={styles.container}>
      <Text style={styles.text}>Hellooooo!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet.create 는 css 자동완성 기능을 제공
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    color: "red",
  },
});
