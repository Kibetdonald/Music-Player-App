import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function FoldersScreen() {
  return (
    <View style={styles.container}>
      <Text>FoldersScreen</Text>
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