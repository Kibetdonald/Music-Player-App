import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SongsScreen from "../screens/SongsScreen";
import FoldersScreen from "../screens/FoldersScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import ArtistsScreen from "../screens/ArtistsScreen";
import GenreScreen from "../screens/GenreScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import MusicPlaying from "./MusicPlaying";
import { useNavigation } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function HeaderComponent() {
  const navigation = useNavigation();
const playMusic = () => {
  navigation.navigate("play");
};
  return (
    <View>
      <View style={styles.topWrapper} />
      <View style={styles.topWrapper2}>
        <Entypo name="menu" size={30} color="#000" />
        <Text onPress={playMusic} style={styles.Title}>Music Player</Text>
        <FontAwesome
          style={{ paddingLeft: "45%" }}
          name="search"
          size={20}
          color="#000"
        />
      </View>
      <View style={{ height: 780 }}>
          <Tab.Navigator
            initialRouteName="Songs"
            screenOptions={{
              tabBarActiveTintColor: "#fff",
              tabBarLabelStyle: { fontSize: 12, color: "#000"},
              tabBarStyle: { backgroundColor: "#fff" },
            }}
          >
            <Tab.Screen
              name="Songs"
              component={SongsScreen}
              options={{ tabBarLabel: "SONGS" }}
            />

            <Tab.Screen
              name="Playlist"
              component={PlaylistScreen}
              options={{ tabBarLabel: "PLAYLIST" }}
            />
            <Tab.Screen
              name="Folder"
              component={FoldersScreen}
              options={{ tabBarLabel: "FOLDERS" }}
            />
              <Tab.Screen
              name="Albums"
              component={AlbumsScreen}
              options={{ tabBarLabel: "ALBUMS" }}
            />
              <Tab.Screen
              name="Artists"
              component={ArtistsScreen}
              options={{ tabBarLabel: "ARTISTS" }}
            />
             <Tab.Screen
              name="Genre"
              component={GenreScreen}
              options={{ tabBarLabel: "GENRE" }}
            />
        
          </Tab.Navigator>
        
      </View>
      <MusicPlaying/>
    </View>
  );
}
const styles = StyleSheet.create({
  topWrapper: {
    height: 30,
    backgroundColor: "grey"
  },
  topWrapper2: {
    flexDirection: "row",
    height: 40,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  Title: {
    paddingLeft: 22,
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  },
});