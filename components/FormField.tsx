import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { useForm, Controller, Control } from "react-hook-form";

interface FormFieldProps {
  icon?: React.ReactNode;
  placeholder: string;
  name: any;
  control: Control<any>;
  error: string | undefined;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  label?: string;
}
const FormField = ({
  icon,
  placeholder,
  name,
  control,
  error,
  secureTextEntry,
  keyboardType,
  label,
}: FormFieldProps) => {
  return (
    <View style={styles.formField}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <TextInput
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              style={styles.input}
              placeholderTextColor={COLORS.grayMedium}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <View style={styles.iconContainer}>{icon}</View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    gap: 10,
    marginBottom: 20,
    position: "relative",
  },

  inputContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 6,
    opacity: 0.5,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grayMedium,
    elevation: 10,
    shadowColor: COLORS.grayMedium,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -5,
    },
  },

  labelContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    top: -10,
    left: 20,
    zIndex: 1,
    paddingHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: COLORS.dark,
  },
  input: {
    fontWeight: "bold",
    color: COLORS.dark,
    flex: 1,
    paddingVertical: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  error: {
    color: COLORS.danger,
    fontWeight: "bold",
  },
});

export default FormField;
