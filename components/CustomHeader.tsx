import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";

const CustomHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.header}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 170,
    backgroundColor: COLORS.primary,
    padding: 50,
    gap: 15,
  },
});

export default CustomHeader;
