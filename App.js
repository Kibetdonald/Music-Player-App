import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderComponent from "./src/components/HeaderComponent";
import AudioProvider from "./src/context/AudioProvider";
import PlayingSongScreen from "./src/screens/PlayingSongScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="headers"
            component={HeaderComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="play"
            component={PlayingSongScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AudioProvider>
  );
}
