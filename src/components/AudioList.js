import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { Component } from "react";
import { AudioContext } from "../context/AudioProvider";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ArtistName = "<Unknown>";

export class AudioList extends Component {
  static contextType = AudioContext;
  // navigation = useNavigation();
  render() {
    const playMusic = () => {
      // navigation.navigate("play");
      console.log("Clicked");
    };
    return (
      <ScrollView>
        {this.context.audioFiles.map((item) => (
          <View style={styles.PlaylistView} key={item.id}>
            <View style={styles.IconView}>
              <FontAwesome name="music" size={20} color="grey" />
            </View>
            <View>
              <Text
                onPress={playMusic}
                style={styles.filenames}
                key={item.id}
                numberOfLines={1}
              >
                {item.filename}
              </Text>
              <Text style={{ paddingLeft: 10, marginTop: -5 }}>
                {ArtistName}
              </Text>
            </View>
            <Feather name="more-vertical" size={24} color="grey" />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  PlaylistView: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  IconView: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  filenames: {
    padding: 10,
    width: 300,
  },
});

export default AudioList;
