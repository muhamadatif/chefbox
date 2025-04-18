import { COLORS } from "@/constants/Colors";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "react-native";

export default function AuthLayout() {
  const pathname = usePathname();

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        translucent={false}
      />
      <Stack
        screenOptions={{
          animation: "fade",
          headerShown: false,
        }}
      />
    </>
  );
}
