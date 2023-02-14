import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../res/colors";
import React from "react";

interface titleProps {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
  image?: string | null;
}

const Title = ({
  children,
  backgroundColor,
  color,
  image = null,
}: titleProps) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text
        style={[
          styles.label,
          { backgroundColor: backgroundColor, color: color },
        ]}
      >
        {children}
      </Text>
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    borderRadius: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  label: {
    borderRadius: 32,
    padding: 18,
    textAlign: "center",
    fontFamily: "Violet Sans",
  },
  image: {
    height: 15,
    width: 15,
  },
});
