import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function GenreScreen() {
  return (
    <View style={styles.container}>
      <Text>GenreScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})