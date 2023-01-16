import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Storage {
  static instance = new Storage();

  store = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  };

  get = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error: any) {
      console.log(error);
      throw Error(error);
    }
  };

  multiGet = async (keys: string[]) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error: any) {
      console.log(error);
      throw Error(error);
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error: any) {
      console.log(error);
      throw Error(error);
    }
  };

  remove = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
