import { useState } from 'react';
import {Button, StyleSheet, TextInput, View, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler (){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')}/>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!!!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
        </View>
      <View style={styles.button}>
      <Button title='Cancel' onPress={props.onCancel} />
      </View>
    
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    width: '90%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop: 16
  },
  button:{
    width:'30%',
    marginHorizontal:8
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
