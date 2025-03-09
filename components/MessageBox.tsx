import React from "react";
import { ThemedView } from "./ThemedView";
import { Image } from "react-native";
import { ThemedText } from "./ThemedText";

export default function MessageBox() {
  return (
    <ThemedView style={{ display: "flex", gap: 15 }}>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("@/assets/images/artists/conan.png")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
          }}
        />
        <ThemedView style={{ display: "flex", gap: 0 }}>
          <ThemedText style={{ fontSize: 17, fontWeight: "700" }}>
            Conan Gray
          </ThemedText>
          <ThemedText>Conan is inviting you to join his mu..</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("@/assets/images/artists/conan.png")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
          }}
        />
        <ThemedView style={{ display: "flex", gap: 0 }}>
          <ThemedText style={{ fontSize: 17, fontWeight: "700" }}>
            Conan Gray
          </ThemedText>
          <ThemedText>Conan is inviting you to join his mu..</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}
