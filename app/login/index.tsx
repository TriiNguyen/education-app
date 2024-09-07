import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/Login.png")}
      />
      <View style={styles.containerBottom}>
        <Text style={styles.textHeader}>Welcome to CodeBox</Text>
        <Text style={styles.textSubHeader}>Login/Signup</Text>

        <View style={styles.button}>
          <Ionicons name="logo-google" size={24} color="white" />
          <Text style={styles.btnText}>Sign In with Google </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 40,
    width: "100%",
    height: "30%",
    objectFit: "contain",
  },
  textHeader: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  textSubHeader: {
    marginTop: 80,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  containerBottom: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 10,
  },

  btnText: {
    color: Colors.white,
  },
});
