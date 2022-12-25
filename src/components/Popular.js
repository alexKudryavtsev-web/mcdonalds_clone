import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { popular } from "../popular";
import ProductItem from "./ProductItem";

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular</Text>

      <View style={styles.products}>
        {popular.map((product) => (
          <ProductItem key={product.name} product={product} />
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
    fontWeight: "bold",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20
  },
});
