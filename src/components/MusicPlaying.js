import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function MusicPlaying() {
  return (
    <View style={styles.MusicPlaying}>
      <View style={styles.IconView}>
        <FontAwesome name="music" size={20} color="#fff" />
      </View>

      <Text style={{color: "white"}}>Adele - When We Were Young (Lyrics).mp3</Text>
      <FontAwesome name="pause" size={18} color="#fff" />
      <MaterialCommunityIcons name="playlist-music" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  MusicPlaying: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    height: 65,
    backgroundColor: "black"
  },
  IconView: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
});
