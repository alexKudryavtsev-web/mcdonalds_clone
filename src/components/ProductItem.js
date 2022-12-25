import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";

export default function ProductItem({ product }) {
  return (
    <TouchableHighlight key={product.name}>
      <View style={styles.product}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  product: {
    width: 100,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: COLORS.gray,
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
});
