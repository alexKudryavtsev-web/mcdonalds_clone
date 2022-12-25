import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { categories } from "../categories";

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
        Hey,
      </Text>
      <Text style={styles.title}>What's up?</Text>

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <TouchableHighlight
            key={category.name}
            onPress={() => setActive(index)}
          >
            <View
              style={{
                ...styles.category,
                backgroundColor: index === active ? COLORS.secondary : COLORS.gray,
              }}
            >
              <Image
                source={{ uri: category.image }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          </TouchableHighlight>
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
  category: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginTop: 5,
    textAlign: 'center',
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
  },
});
