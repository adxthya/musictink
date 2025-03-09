import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Image } from "react-native";

const artists = [
  { name: "Arijit", image: require("@/assets/images/artists/arjit.png") },
  { name: "Conan", image: require("@/assets/images/artists/conan.png") },
  { name: "Weeknd", image: require("@/assets/images/artists/weeknd.png") },
  { name: "Younger", image: require("@/assets/images/artists/younger.png") },
];

export default function StoriesBar() {
  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        paddingVertical: 15,
        paddingHorizontal: 5,
      }}
    >
      {artists.map((artist, index) => (
        <ThemedView
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={artist.image}
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 3,
              borderColor: "gray",
            }}
          />
          <ThemedText style={{ fontSize: 13 }}>{artist.name}</ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
}
