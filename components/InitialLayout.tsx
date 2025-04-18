import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function InitialLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={false} />
      <Stack
        screenOptions={{
          animation: "fade",
          headerShown: false,
        }}
      />
    </>
  );
}
