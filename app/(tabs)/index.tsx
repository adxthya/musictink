import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import StatusBar from "@/components/StatusBar";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <StatusBar />
    </ThemedView>
  );
}
