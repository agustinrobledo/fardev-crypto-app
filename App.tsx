import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.formGoalContainer}>
        <TextInput style={styles.goalInput} placeholder="Learn React Native" />
        <Button color="red" title="add a goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: "column",
  },
  formGoalContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  goalInput: {
    color: "green",
    width: "80%",
  },
  goalsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 16,
  },
});
