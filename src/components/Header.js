import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://youtube.com")}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png",
            }}
            style={styles.logo}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Image
          source={{
            uri: "https://findicons.com/files/icons/1700/2d/512/cart.png",
          }}
          style={styles.cart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 51,
    height: 45,
  },
  cart: {
    width: 45,
    height: 45,
  },
});
