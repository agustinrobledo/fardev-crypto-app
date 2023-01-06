import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import colors from "../../res/colors";

const SearchCoin = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (query: string) => {
    setSearchValue(query);
  };
  return (
    <TextInput
      style={styles.input}
      onChangeText={handleChange}
      value={searchValue}
      placeholder="Search your coin:"
      placeholderTextColor={colors.labels}
    />
  );
};

export default SearchCoin;

const styles = StyleSheet.create({
  input: {
    color: colors.labels,
    padding: 15,
    backgroundColor: colors.text,
  },
});
