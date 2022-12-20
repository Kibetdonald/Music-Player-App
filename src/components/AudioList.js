import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { Component } from "react";
import { AudioContext } from "../context/AudioProvider";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";

const ArtistName = "<Unknown>";

export class AudioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playbackObj: null,
      soundObj: null,
      currentAudio: {}
    };
  }

  static contextType = AudioContext;
  // navigation = useNavigation();

  playMusic = async (audio) => {
// Playing Audio
    if (this.state.soundObj === null) {
      const playbackObj = new Audio.Sound();
      const status = await playbackObj.loadAsync(
        { uri: audio.uri },
        { shouldPlay: true }
      );
     return this.setState({
        ...this.state,
        currentAudio: audio,
        playbackObj: playbackObj,
        soundObj: status,
      });
    }
    // Pausing Audio
    if(this.state.soundObj.isLoaded && this.state.soundObj.isPlaying){
    const status = this.state.playbackObj.setStatusAsync({shouldPlay: false})
    return this.setState({
      ...this.state,
      soundObj: status,
    });
    }
    // Resume Audio
    if(this.state.soundObj.isLoaded && !this.state.soundObj.isPlaying && this.state.currentAudio.id === audio.id){
       const status = await this.state.playbackObj.playAsync()
       return this.setState({
        ...this.state,
        soundObj: status,
      });
    }
  };

  render() {
    return (
      <ScrollView>
        {this.context.audioFiles.map((item) => (
          <View style={styles.PlaylistView} key={item.id}>
            <View style={styles.IconView}>
              <FontAwesome name="music" size={20} color="grey" />
            </View>
            <View>
              <Text
                onPress={() => this.playMusic(item)}
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
