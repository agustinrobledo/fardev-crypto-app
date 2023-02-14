import { View, StyleSheet } from "react-native";
import React from "react";

interface labelProps {
  children: React.ReactNode;
  backgroundColor: string;
  image?: string | null;
  type: "square" | "circle";
  height: string | number;
  width: string | number;
}

const Label = ({
  children,
  backgroundColor,
  type,
  width,
  height,
}: labelProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          borderRadius: type === "circle" ? 100 : 32,
        },
      ]}
    >
      <>{children}</>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
