import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import constants from "@/src/constants";

const TabLayoutIndex = () => {
  const TabIcon = ({
    icon,
    color,
    name,
    focused,
  }: {
    icon: any;
    color: string;
    name: string;
    focused: boolean;
  }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={focused ? color : "gray"}
          className="w-5 h-5"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-medium"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };
  return (
    <Tabs
      initialRouteName="chatScreen"
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          height: 64,
        },
      }}
    >
      <Tabs.Screen
        name="chatScreen"
        options={{
          title: "chats",
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={constants.icons.home}
              color={color}
              name="Chats"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profileScreen"
        options={{
          title: "Profile",
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={constants.icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayoutIndex;

const styles = StyleSheet.create({});
