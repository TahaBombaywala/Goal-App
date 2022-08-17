import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItems = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteHandler.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  pressedItem:{
    opacity:0.5,
  },

  goalText: {
    color: "white",
    padding: 14,
  },
});
