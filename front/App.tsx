import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text>텍스트</Text>
      <Button title='버튼이름' onPress={() => { console.log('클릭됨!') }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  }
})


export default App;