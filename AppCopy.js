import { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import RoomScreen from "./screens/RoomScreen";
import HomeScreen from "./screens/HomeScreen";
import * as Permissions from "expo-permissions";

export default function App() {
  const [joinRoom, setJoinRoom] = useState(false);
  // const navigate = useCallback(
  //   (screen) => setJoinRoom(screen === "RoomScreen"),
  //   []
  // );

  useEffect(() => {
    const checkPermissions = async () => {
      const { status: cameraStatus } = await Permissions.askAsync(
        Permissions.CAMERA
      );
      const { status: audioStatus } = await Permissions.askAsync(
        Permissions.AUDIO_RECORDING
      );

      if (cameraStatus === "granted" && audioStatus === "granted") {
        setJoinRoom(true);
      } else {
        console.log("Permission Not Granted!");
      }
    };

    checkPermissions();
  }, []);

  const handleJoinPress = () => {
    setJoinRoom(true);
  };

  const handleRoomEnd = () => {
    setJoinRoom(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF7FF" }}>
      <StatusBar barStyle={"dark-content"} />

      {joinRoom ? (
        <RoomScreen handleRoomEnd={handleRoomEnd} />
      ) : (
        <HomeScreen handleJoinPress={handleJoinPress} />
      )}
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

// plugins for 100ms
// [
//   "expo-camera",
//   {
//     "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera."
//   }
// ],
