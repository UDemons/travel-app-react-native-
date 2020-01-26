import React, {useEffect, useState} from "react";

import AppContainer from "./src/travel";

import * as Font from "expo-font";
import {ActivityIndicator} from "react-native";

export default function App () {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
        "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
        "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
        "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
      })
      setLoaded(true)
    })()
  }, []);

  return !loaded ? <ActivityIndicator size="large"/> : <AppContainer/>
}
