import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { popular } from "../popular";

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular</Text>

      <View style={styles.products}>
        {popular.map((product) => (
          <TouchableHighlight key={product.name}>
            <View style={styles.product}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
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
    fontWeight: "bold",
  },
  product: {
    width: 100,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: COLORS.gray
  },
  productImage: {
    width: 40,
    height: 40,
  },
  productName: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginTop: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: SIZES.h4,
    color: COLORS.primary,
    marginTop: 5,
    textAlign: "center",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
  },
});
