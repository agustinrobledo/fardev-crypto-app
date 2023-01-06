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
    <TextInput
      style={styles.input}
      onChangeText={handleChange}
      value={searchValue}
      placeholder="Search your coin:"
      placeholderTextColor={colors.secondary}
    />
  );
};

export default SearchCoin;

const styles = StyleSheet.create({
  input: {
    color: colors.secondary,
    padding: 15,
    backgroundColor: colors.headline,
  },
});
