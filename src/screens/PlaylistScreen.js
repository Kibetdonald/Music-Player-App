import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <Text>PlaylistScreen</Text>
      <ActivityIndicator size="large" color="#00ff00" />
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