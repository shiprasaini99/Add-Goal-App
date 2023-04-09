import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
function App(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
         id: Math.random().toString()
        },
    ]);
    endAddGoalHandler();
  };
  function startAddGoalHandler (){
    setModalIsVisible(true)
  }
  function deleteGoalHandler() {
    setCourseGoals((currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id);
    }))
  };

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput onCancel={endAddGoalHandler} visible={modalIsVisible} onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>;
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
    padding: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});

export default App;
