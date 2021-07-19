import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  keyboardavoidingview,
  View
} from "react-native";
import Task from "../components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const hasndleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((items, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={items} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <keyboardavoidingview
        behaviour={Platform.os === "ios" ? "padding" : "height"}
        styles={styles.writeTaskWarpper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write to do task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => hasndleAddTask()}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add to List</Text>
          </View>
        </TouchableOpacity>
      </keyboardavoidingview>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#E8EAED"
  },
  touchable: {
    alignItems: "center"
  },
  tasksWrapper: {
    paddingTop: 80,
    padding: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  items: {
    margginTop: 30
  },
  centerView: {
    alignItems: "center",
    justifyContent: "center"
  },
  addText: {
    fontWeight: "bold"
  },
  addWrapper: {
    width: "30%",
    height: 60,
    margin: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 2
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 2
  },
  writeTaskWarpper: {
    width: "100%",
    bottom: 60,
    alignItems: "center",
    justifyContent: "center"
  }
});
