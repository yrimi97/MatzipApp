import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

function App() {

  const [name, setName] = useState('');

  // const handleChangeInput = (e) => {
  //   setName(e.target.value);
  // };

  // onChangeText 함수와 결합하면 e 이벤트 사용할 필요 없음
  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={name} onChangeText={handleChangeInput} />
        <Text>텍스트</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  inputContainer: {
    // display : flex 설정이 필요 없음
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    height: 100,
  }
})


export default App;