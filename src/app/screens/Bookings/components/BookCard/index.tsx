import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// types
import Book from "@/app/types/Book";
// expo
import { Image } from "expo-image";

// icons
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

type Props = {
  data: Book;
};

export default function BookCard({ data }: Props) {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        {/* image container */}
        <View style={styles.categoryImage}>
          <Image
            style={{ width: 30, height: 20 }}
            source={require("@/assets/svg/ac-category.svg")}
          />
        </View>

        {/* infos */}
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>{data.service.title}</Text>
          <Text style={styles.headerSubtitle}>
            Reference Code:{data.referenceCode}
          </Text>
        </View>
      </View>

      {/* divider */}
      <View style={styles.divider} />

      {/* body */}
      <View style={styles.cardBody}>
        {/* body header */}
        <View style={styles.bodyHeader}>
          <Text>Status</Text>
          <Text>{data.status}</Text>
        </View>

        {/* schedule */}
        <View>
          <View>
            <Feather name="calendar" size={24} color="black" />
          </View>
          <View>
            <Text>{data.schedule}</Text>
            <Text>Schedule</Text>
          </View>
        </View>

        {/* provider */}
        <View>
          {/* logo */}
          <View>
            {/* <Image
              style={{ width: 25 }}
              source={require(data.service.provider.logo)}
            /> */}
          </View>
          <View>
            <Text>{data.service.provider.name}</Text>
            <Text>Service provider</Text>
          </View>
          <TouchableOpacity>
            <Feather name="phone" size={24} color="black" />
            <Text>call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
