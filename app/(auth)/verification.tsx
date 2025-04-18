import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@/constants/Colors";
import { OtpInput } from "react-native-otp-entry";
import Button from "@/components/Button";
import CustomHeader from "@/components/CustomHeader";

const Verification = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <CustomHeader>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Verification</Text>
        <Text>
          please enter one time password (otp) sent to your email:{" "}
          <Text style={{ fontWeight: "bold" }}>mohamed@org.io</Text>
        </Text>
      </CustomHeader>
      <View style={styles.verificationForm}>
        <View style={styles.otpContainer}>
          <Text>Enter verification code</Text>
          <View style={styles.otpInput}>
            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => setOtp(text)}
              autoFocus={false}
            />
          </View>
        </View>
        <Button
          label="Verifiy"
          onPress={() => console.log("hi")}
          type="secondary"
        />
      </View>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Resend in 40 Sec</Text>
      </View>
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
  verificationForm: {
    padding: 50,
  },
  otpContainer: {
    gap: 20,
    marginBottom: 130,
  },
  otpInput: {},
  resendContainer: {
    marginTop: 50,
  },
  resendText: {
    textAlign: "center",
  },
});

export default Verification;
