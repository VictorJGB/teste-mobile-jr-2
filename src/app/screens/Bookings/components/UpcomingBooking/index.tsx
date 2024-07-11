import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// types
import Book from "@/app/types/Book";
// expo
import { Image } from "expo-image";

// icons
import { Feather } from "@expo/vector-icons";

type Props = {
  data: Book;
};

export default function UpComingBooking({ data }: Props) {
  return (
    <View>
      {/* header */}
      <View>
        {/* image container */}
        <View>
          <Image
            style={{ width: 30 }}
            source={require("@/assets/svg/ac-category")}
          />
        </View>

        {/* infos */}
        <View>
          <Text>{data.service.title}</Text>
          <Text>Reference Code:{data.referenceCode}</Text>
        </View>
      </View>

      {/* divider */}
      <View />

      {/* body */}
      <View>
        {/* body header */}
        <View>
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
            <Image
              style={{ width: 25 }}
              source={require(data.service.provider.logo)}
            />
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
