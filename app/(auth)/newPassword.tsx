import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { COLORS } from "@/constants/Colors";
import FormField from "@/components/FormField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema } from "@/schemas/auth";
import Button from "@/components/Button";
import CustomHeader from "@/components/CustomHeader";

const NewPassword = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
  });

  const onSubmit = (data: any) => {
    router.replace("/(app)/home");
  };
  return (
    <>
      <CustomHeader>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>New Password</Text>
          <Text style={styles.subHeader}>
            Set the new password for your account
          </Text>
        </View>
      </CustomHeader>
      <View style={styles.container}>
        <View style={styles.form}>
          <FormField
            name="password"
            placeholder="New password"
            control={control}
            error={errors.password?.message}
            icon={
              <TouchableOpacity onPress={() => resetField("password")}>
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
          />
        </View>

        <Button
          type="secondary"
          label="Reset password"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1, padding: 36 },
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

export default NewPassword;
