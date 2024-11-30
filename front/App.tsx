import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
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