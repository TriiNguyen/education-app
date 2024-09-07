import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return <Link href="/login">Go to Login</Link>;
}
