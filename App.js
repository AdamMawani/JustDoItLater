import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TargetItem from './components/TargetItem';
import TargetInput from './components/TargetInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseTargets, setCourseTargets] = useState([]);

  function startAddTargetHandler() {
    setModalIsVisible(true);
  }

  function endAddTargetHandler() {
    setModalIsVisible(false);
  }

  function addTargetHandler(enteredTargetText) {
    setCourseTargets((currentCourseTargets) => [
      ...currentCourseTargets,
      { text: enteredTargetText, id: Math.random().toString() },
    ]);
    endAddTargetHandler();
  }

  function deleteTargetHandler(id) {
    setCourseTargets((currentCourseTargets) => {
      return currentCourseTargets.filter((target) => target.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Target"
          color="#a065ec"
          onPress={startAddTargetHandler}
        />
        <TargetInput
          visible={modalIsVisible}
          onAddTarget={addTargetHandler}
          onCancel={endAddTargetHandler}
        />
        <View style={styles.targetsContainer}>
          <FlatList
            data={courseTargets}
            renderItem={(itemData) => {
              return (
                <TargetItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteTargetHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  targetsContainer: {
    flex: 5,
  },
});