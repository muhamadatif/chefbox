import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "@/constants/Colors";
import { OtpInput } from "react-native-otp-entry";
import Button from "@/components/Button";
import CustomHeader from "@/components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { useKeyboardVisibility } from "@/hooks/useKeyboardVisibility";
import { useRouter } from "expo-router";

const VerificationSignup = () => {
  const [otp, setOtp] = useState("");
  const isKeyboardVisible = useKeyboardVisibility();
  const [counter, setCounter] = useState(40);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (counter === 0) {
      setError("No code was entered!");
      setCounter(40);

      return;
    }
    const timer = setTimeout(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  const handleSubmit = () => {
    if (otp) {
      router.replace("/(auth)/newPassword");
    }
  };

  return (
    <>
      <CustomHeader>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Verification</Text>
        <Text>
          please enter one time password (otp) sent to your email:{" "}
          <Text style={{ fontWeight: "bold" }}>mohamed@org.io</Text>
        </Text>
      </CustomHeader>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: isKeyboardVisible ? 100 : 60 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.otpContainer}>
          <Text>Enter verification code</Text>
          <View style={styles.otpInput}>
            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => {
                setOtp(text);
                setError("");
              }}
              autoFocus={false}
            />
          </View>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={{ color: COLORS.danger, fontWeight: "bold" }}>
                {error}
              </Text>
            </View>
          )}
        </View>

        <Button label="Verifiy" onPress={handleSubmit} type="secondary" />
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Resend in {counter} Sec</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 36,
  },
  header: {
    height: 170,
    backgroundColor: COLORS.primary,
    padding: 50,
    gap: 15,
  },
  verificationForm: {
    padding: 50,
  },
  otpContainer: {
    gap: 20,
    marginBottom: 130,
  },
  otpInput: {},

  errorContainer: {
    marginTop: 5,
  },
  resendContainer: {
    marginTop: 50,
  },
  resendText: {
    textAlign: "center",
  },
});

export default VerificationSignup;
