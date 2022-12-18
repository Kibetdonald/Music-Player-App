import { View} from "react-native";
import React from "react";
import AudioList from "../components/AudioList";

export default function SongsScreen() {
  return (
    <View style={{marginTop: 10}}>
     <AudioList/>
    </View>
  );
}
