import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Popular from "./src/components/Popular";
import { COLORS } from "./constants";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Categories />
      <Popular />

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 24,
    backgroundColor: COLORS.black,
  },
});
