import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
// import { registerGlobals } from "@livekit/react-native";
import { Participant, Room, Track } from 'livekit-client';
import { useRoom, AudioSession, VideoView } from '@livekit/react-native';

export default function App() {
  // registerGlobals();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF7FF" }}>
      <StatusBar barStyle={"dark-content"} />

      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
