import { Text, View, Alert } from "react-native";
import React, { Component, createContext } from "react";
// import expo media library
import * as MediaLibrary from "expo-media-library";

export const AudioContext = createContext()
export class AudioProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFiles: []
    }
  }
  permissionAlert = () => {
    Alert.alert("Permision Required", "This app needs to read audio files!", [
      {
        text: "I am ready",
        onPress: () => this.getPermission(),
      },
      {
        text: "Cancel",
        onPress: () => this.permissionAlert(),
      },
    ]);
  };

  getAudioFiles = async () => {
  let media = await MediaLibrary.getAssetsAsync({
    mediaType: 'audio'
  })
  media = await MediaLibrary.getAssetsAsync({
    mediaType: 'audio',
    first: media.totalCount
  })
  console.log(media)
 this.setState({...this.state, audioFiles: media.assets})

}

  getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    if (permission.granted) {
      // get all music files
      this.getAudioFiles();
    }
    if (!permission.granted && permission.canAskAgain) {
      // request permission
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        // Display alert
        permissionAlert();
      }
      if (status === "granted") {
        // Get all the audio files
        this.getAudioFiles();
      }
      if (status === "denied" && !canAskAgain) {
        // Display error to the user
      }
    }
  };

  componentDidMount() {
    this.getPermission()
  }

  render() {
    return (
      <AudioContext.Provider value={{audioFiles : this.state.audioFiles}}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioProvider;
