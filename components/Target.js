import { StyleSheet, View, Text, Pressable } from 'react-native';

function Target(props) {
  return (
    <View style={styles.targetItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.targetText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Target;

const styles = StyleSheet.create({
  target: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressed: {
    opacity: 0.5,
  },
  targetText: {
    color: 'white',
    padding: 8,
  },
});