import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Image, ScrollView } from "react-native";

interface MusicItem {
  title: string;
  artists: string;
  cover: any;
}

interface MusicBoardProps {
  musicList: MusicItem[];
}

export default function MusicBoard({ musicList }: MusicBoardProps) {
  return (
    <ThemedView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {musicList.map((music, index) => (
          <ThemedView
            key={index}
            style={{ marginRight: 25 }}
          >
            <Image
              source={music.cover}
              style={{ width: 160, height: 160, borderRadius: 20 }}
            />
            <ThemedView style={{ paddingVertical: 5 }}>
              <ThemedText style={{ fontSize: 17 }}>{music.title}</ThemedText>
              <ThemedText style={{ fontSize: 14, color: "#aaa" }}>
                {music.artists}
              </ThemedText>
            </ThemedView>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}
