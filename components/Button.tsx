import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";

const TYPES = {
  primary: COLORS.primary,
  secondary: COLORS.dark,
};

const LABELS = {
  primary: COLORS.dark,
  secondary: COLORS.white,
};

interface Props {
  label: string;
  type?: "primary" | "secondary";
  onPress: () => void;
}

const Button = ({ label, type = "primary", onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: TYPES[type] }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: LABELS[type] }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    padding: 16,
    borderRadius: 8,
  },
  buttonText: { textAlign: "center", fontWeight: "bold", fontSize: 16 },
});

export default Button;
