import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Storage from "../../libs/storage";
import React, { useEffect, useState } from "react";
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
  const [coin, setCoin] = useState<IFCoin>({
    id: "",
    name: "",
    price_usd: "",
    symbol: "",
    percent_change_1h: "",
    csupply: "",
    percent_change_24h: "",
    percent_change_7d: "",
    price_btc: "",
    rank: 0,
  });
  const [imgCoin, setImgCoin] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setCoin(route.params.coin);
  }, []);

  useEffect(() => {
    if (coin.id) {
      getFavorite();
    }
  }, [coin]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  const removeFavorite = async () => {
    try {
      const key = `favorite-${coin.id}`;

      const removed = await Storage.instance.remove(key);

      if (removed) {
        setIsFavorite(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async () => {
    try {
      const coinJson = JSON.stringify(coin);
      const key = `favorite-${coin.id}`;

      const stored = await Storage.instance.store(key, coinJson);

      if (stored) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFavorite = async () => {
    try {
      const key = `favorite-${coin.id}`;
      console.log(key);

      const favoriteCoin = await Storage.instance.get(key);
      if (favoriteCoin?.length) {
        setIsFavorite(true);
      }
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.section}>
          <Image
            style={styles.image}
            source={{
              uri: `https://c1.coinlore.com/img/25x25/${coin.name.toLowerCase()}.png`,
            }}
          />
          <Text style={[styles.text, styles.coinText]}>{coin.symbol}</Text>
        </View>
        <Pressable onPress={toggleFavorite}>
          <View
            style={
              isFavorite ? styles.deleteFromFavorites : styles.addToFavorites
            }
          >
            <Text>
              {isFavorite ? "Delete from favorites" : "Add to favorites"}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={[styles.title]}>Price in USD</Text>
        <Text style={[styles.info]}>${coin.price_usd}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={[styles.title]}>Rank</Text>
        <Text style={[styles.info]}>{coin.rank}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={[styles.title]}>Last hour change:</Text>
        <Text style={[styles.info]}>{coin.percent_change_1h}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={styles.title}>Last day change:</Text>
        <Text style={styles.info}>{coin.percent_change_24h}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={styles.title}>Csupply:</Text>
        <Text style={styles.info}>{coin.csupply}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: colors.background,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  coinText: {
    fontWeight: "600",
    marginLeft: 4,
    fontSize: 16,
  },
  title: {
    backgroundColor: colors.headline,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: colors.text,
    fontSize: 18,
  },
  addToFavorites: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    flex: 3,
  },
  deleteFromFavorites: {
    paddingVertical: 20,
    flex: 3,
    paddingHorizontal: 20,
    backgroundColor: colors.secondary,
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: colors.text,
  },
  section: {
    paddingHorizontal: 20,
    flex: 1,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sectionInfo: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: 25,
    height: 25,
  },
  sectionStats: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  rank: {
    backgroundColor: colors.terciary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
