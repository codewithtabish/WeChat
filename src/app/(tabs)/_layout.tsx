import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppThemedProvider from "@/src/components/ThemedProvider";

const _layout = () => {
  return (
    <AppThemedProvider>
      <Text className="text-red-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga, nulla
        nobis voluptas inventore assumenda perspiciatis eius asperiores eligendi
        accusantium maiores necessitatibus delectus excepturi provident totam,
        blanditiis, nam eveniet. Vitae!
      </Text>
    </AppThemedProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
