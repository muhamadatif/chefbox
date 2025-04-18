import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { COLORS } from "@/constants/Colors";
import FormField from "@/components/FormField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/schemas/auth";
import Button from "@/components/Button";

const ForgotPassword = () => {
  const [successfulCode, setSuccessfulCode] = useState("");
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: any) => {
    let formData: { mobile?: string; email?: string } = {};
    if (data.emailOrPhone.startsWith("0")) {
      formData.mobile = data.emailOrPhone;
      setSuccessfulCode(
        `We have successfully send verification link to: ${formData.mobile}`
      );
    } else {
      formData.email = data.emailOrPhone;
      setSuccessfulCode(
        `We have successfully send verification link to: ${formData.email}`
      );
    }

    // router.replace("/(app)/home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Forgot Password</Text>
        <Text style={styles.subHeader}>
          Enter your mobile number or Email and we will send you a password
          reset code
        </Text>
      </View>
      {successfulCode && (
        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: "cyan" }}>{successfulCode}</Text>
        </View>
      )}
      <View style={styles.form}>
        <FormField
          name="emailOrPhone"
          placeholder="Email or phone number"
          control={control}
          error={errors.emailOrPhone?.message}
          icon={
            <TouchableOpacity onPress={() => resetField("emailOrPhone")}>
              <Text
                style={{
                  color: COLORS.grayDark,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Clear
              </Text>
            </TouchableOpacity>
          }
          // label="Email or phone"
        />
      </View>

      <Button label="Reset password" onPress={handleSubmit(onSubmit)} />

      <View style={styles.footer}>
        <Text
          style={{ fontSize: 12, color: COLORS.grayMedium, fontWeight: "bold" }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <Text
            style={{ color: COLORS.dark, fontSize: 16, fontWeight: "bold" }}
          >
            Sign up now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 36,
  },
  headerContainer: {
    gap: 15,
    marginBottom: 60,
  },
  header: {
    color: COLORS.dark,
    fontWeight: "bold",
    fontSize: 25,
  },
  subHeader: {
    color: COLORS.dark,
    fontSize: 14,
    fontWeight: "500",
  },
  form: {
    marginBottom: 70,
  },
  forgotPasswordBox: {
    alignSelf: "flex-end",
    marginTop: -14,
  },
  footer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
});

export default ForgotPassword;
