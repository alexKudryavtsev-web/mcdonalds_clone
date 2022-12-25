import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";

export default function CategoryItem({ category, index, active, setActive }) {
  return (
    <TouchableHighlight onPress={() => setActive(index)}>
      <View
        style={{
          ...styles.category,
          backgroundColor: index === active ? COLORS.secondary : COLORS.gray,
        }}
      >
        <Image source={{ uri: category.image }} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{category.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  category: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginTop: 5,
    textAlign: "center",
  },
});
