import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import StoriesBar from "@/components/StoriesBar";
import MusicBoard from "@/components/MusicBoard";

export default function HomeScreen() {
  const recentlyPlayedList = [
    {
      title: "Blinding Lights",
      artists: "The Weeknd",
      cover: require("@/assets/images/covers/blinding.png"),
    },
    {
      title: "Die With A Smile",
      artists: "Bruno Mars, Lady Gaga",
      cover: require("@/assets/images/covers/smile.png"),
    },
    {
      title: "Die With A Smile",
      artists: "Bruno Mars, Lady Gaga",
      cover: require("@/assets/images/covers/smile.png"),
    },
  ];

  const friendJam = [
    {
      title: "Sithira Puthiri",
      artists: "Sai, Vivek",
      cover: require("@/assets/images/covers/sithira.png"),
    },
    {
      title: "Dead Inside",
      artists: "Younger Hunger",
      cover: require("@/assets/images/covers/dead.png"),
    },
    {
      title: "Die With A Smile",
      artists: "Bruno Mars, Lady Gaga",
      cover: require("@/assets/images/covers/smile.png"),
    },
  ];
  return (
    <ThemedView style={{ flex: 1, paddingHorizontal: 10 }}>
      <StoriesBar />
      <ThemedView>
        <ThemedText
          style={{
            paddingVertical: 10,
            fontSize: 22,
            color: "gray",
            paddingBottom: 20,
          }}
        >
          Recently Played
        </ThemedText>
        <MusicBoard musicList={recentlyPlayedList} />
      </ThemedView>
      <ThemedView>
        <ThemedText
          style={{ paddingVertical: 20, fontSize: 22, color: "gray" }}
        >
          Friend's Current Jam
        </ThemedText>
        <MusicBoard musicList={friendJam} />
      </ThemedView>
    </ThemedView>
  );
}
