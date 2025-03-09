import React from "react";
import { ThemedView } from "@/components/ThemedView";
import StatusBar from "@/components/StatusBar";
import { ThemedText } from "@/components/ThemedText";
import MessageBox from "@/components/MessageBox";

export default function Message() {
  return (
    <ThemedView style={{ flex: 1, paddingHorizontal: 10 }}>
      <StatusBar />
      <ThemedView>
        <ThemedText
          style={{
            paddingVertical: 10,
            fontSize: 22,
            color: "gray",
            paddingBottom: 20,
          }}
        >
          Messages
        </ThemedText>
        <ThemedView>
          <MessageBox />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}
