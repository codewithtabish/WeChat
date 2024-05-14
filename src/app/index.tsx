import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const AppIndex = () => {
  return <Redirect href={"(main)/(tabs)/chatScreen"} />;
};

export default AppIndex;

const styles = StyleSheet.create({});
