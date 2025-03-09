import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Image, View } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <SafeAreaView>
        <ThemedView
          style={{
            height: 50,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Image
              source={require("@/assets/images/topbar/logo.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
            <Image
              source={require("@/assets/images/topbar/search.png")}
              style={{ width: 30, height: 30 }}
            />
            <Image
              source={require("@/assets/images/topbar/settings.png")}
              style={{ width: 28, height: 28 }}
            />
          </View>
        </ThemedView>
      </SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#007AFF" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          title: "My App", // Set your top navbar title
        }}
      />

      {/* Tabs Navigator for Bottom Navbar */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false, // Hide tab headers, as Stack will handle the top navbar
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarShowLabel: false,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/navbar/home.png")
                    : require("@/assets/images/navbar/home-focused.png")
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="message"
          options={{
            title: "Messages",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/navbar/message-focused.png")
                    : require("@/assets/images/navbar/message.png")
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="liked"
          options={{
            title: "Liked",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/navbar/liked-focused.png")
                    : require("@/assets/images/navbar/liked.png")
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/navbar/profile-focused.png")
                    : require("@/assets/images/navbar/profile.png")
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
