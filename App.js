import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsValid, setModalIsValid] = useState(false);

  const startAppHandler = () => {
    setModalIsValid(true);
  };

  const endAppHandler = () => {
    setModalIsValid(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAppHandler();
  };

  const deleteGoalHandler = (id) => {
    console.log(id);
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add Your Goal"
          color="#a065ec"
          onPress={startAppHandler}
        />
        <GoalInput
          visible={modalIsValid}
          onAddHandler={addGoalHandler}
          onCancel={endAppHandler}
        />

        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteHandler={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalContainer: {
    flex: 5,
  },
});
