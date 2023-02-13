import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import colors from "../../res/colors";
import { IFCoin } from "../../types/coins/typeCoins";

type typeProps = {
  onChange: (query: string) => void;
};

const SearchCoin = ({ onChange }: typeProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (query: string) => {
    setSearchValue(query);
    if (onChange) {
      onChange(query);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={searchValue}
        placeholder="Search your coin:"
        placeholderTextColor={colors.pink.light}
      />
    </View>
  );
};

export default SearchCoin;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    borderRadius: 32,
    color: colors.pink.light,
    padding: 15,
    backgroundColor: colors.purple.dark,
    width: "90%",
    textAlign: "center",
    fontFamily: "Violet Sans",
  },
});
