import { StatusBar } from "expo-status-bar";
import React, { ChangeEventHandler, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  const handleChange = (e) => {
    setGoal(e.target.value);
  };

  const handleAddGoal = () => {
    setGoals([...goals, goal]);
    setGoal("");
  };

  console.log(goals);

  return (
    <View style={styles.appContainer}>
      <View style={styles.formGoalContainer}>
        <TextInput
          style={styles.goalInput}
          onChangeText={(e) => handleChange(e)}
          placeholder="Learn React Native"
        />
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
    flex: 1,
    flexDirection: "column",
  },
  formGoalContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#cccccc",
    paddingBottom: 20,
  },
  goalInput: {
    color: "green",
    width: "80%",
    backgroundColor: "#f1f1f1",
    paddingLeft: 6,
    borderRadius: 4,
    paddingVertical: 4,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 16,
  },
});
