import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Navigation from "./Navigation";

export default function Main() {
  return (
    <>
      <StatusBar backgroundColor='transparent' />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
