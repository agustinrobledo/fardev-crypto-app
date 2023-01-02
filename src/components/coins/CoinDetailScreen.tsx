import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { IFCoin } from "../../types/coins/typeCoins";
import colors from "../../res/colors";

type detailProps = {
  route: {
    params: {
      coin: IFCoin;
    };
  };
};

export default function CoinDetailScreen({ route }: detailProps) {
  useEffect(() => console.log(route.params.coin), []);
  return (
    <View style={styles.container}>
      <View style={styles.rankContainer}>
        <Text style={styles.title}>Rank</Text>
        <Text style={styles.rankValue}>{route.params.coin.rank}</Text>
      </View>
      <View style={styles.containerStats}>
        <View style={styles.percentStats}>
          <Text>Last hour change:</Text>
          <Text>{route.params.coin.percent_change_1h}</Text>
        </View>
      </View>
      {/* <View style={styles.percentStats}>
        <Text>Last day change</Text>
        <Text>{route.params.coin.percent_change_24h}</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    backgroundColor: colors.background,
    height: "100%",
    width: "100%",
  },
  rankContainer: {
    flexDirection: "column",
    height: 100,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  rankValue: {
    fontSize: 24,
  },
  containerStats: {
    flex: 2,
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.secondary,
  },
  percentStats: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
