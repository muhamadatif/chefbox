import { COLORS } from "@/constants/Colors";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "react-native";

export default function InitialLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={false} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
