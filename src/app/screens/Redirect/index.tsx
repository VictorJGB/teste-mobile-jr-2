import { StackNavigation } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

type Props = {};

export default function RedirectScreen({}: Props) {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>Active routes</Text>
      <Button title="Home" onPress={() => navigate("Home")} />
      <Button title="Bookings" onPress={() => navigate("Bookings")} />
    </View>
  );
}
