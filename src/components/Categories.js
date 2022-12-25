import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { categories } from "../categories";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  const [active, setActive] = useState(null);

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.title,
          fontWeight: "bold",
        }}
      >
        Hey, what's up?</Text>

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <CategoryItem
            key={category.name}
            active={active}
            index={index}
            category={category}
            setActive={setActive}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontSize: SIZES.h2,
    color: COLORS.white,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
  },
});
