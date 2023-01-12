import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function FavoriteDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>
        You don't have any favorite coin yet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingTop: 20,
  },
  emptyText: {
    alignSelf: "center",
    fontSize: 15,
  },
});
