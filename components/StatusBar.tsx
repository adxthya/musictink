import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Image } from "react-native";

const friends = [
  {
    name: "Arijit",
    image: require("@/assets/images/artists/arjit.png"),
    online: true,
  },
  {
    name: "Conan",
    image: require("@/assets/images/artists/conan.png"),
    online: true,
  },
  { name: "Weeknd", image: require("@/assets/images/artists/weeknd.png") },
  { name: "Younger", image: require("@/assets/images/artists/younger.png") },
];

export default function StatusBar() {
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
      {friends.map((friend, index) => (
        <ThemedView
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedView style={{ position: "relative" }}>
            <Image
              source={friend.image}
              style={{
                width: 70,
                height: 70,
                borderRadius: 100,
              }}
            />
            <ThemedView
              style={{
                width: 8,
                height: 8,
                borderRadius: 100,
                borderWidth: 8,
                borderColor: "#1DB954",
                position: "absolute",
                bottom: 0,
                right: 0,
                display: friend.online ? "flex" : "none",
              }}
            ></ThemedView>
          </ThemedView>
          <ThemedText style={{ fontSize: 13 }}>{friend.name}</ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
}
