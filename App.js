import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "GT-Planar": require("./assets/fonts/GT-Planar-Regular-Trial.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.clickMe}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#cbf036",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  clickMe: {
    fontSize: 16,
    fontFamily: "GT-Planar",
  },
});
