import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
// icons
import { AntDesign } from "@expo/vector-icons";
// styles
import Theme from "@/styles/Theme";
import { styles } from "./styles";
// gradient
import { LinearGradient } from "expo-linear-gradient";
// components
import BookFooter from "./components/BookFooter";
import DescriptionComponent from "./components/Description";
import PropertiesComponent from "./components/Properties";
import QuantitiesComponent from "./components/Quantities";
// navigation
import { RootStackParamList, StackNavigation } from "@/routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// enums
import Book from "@/app/types/Book";
import { useBookingContext } from "@/context/booking";
import { BookingType, Status } from "@/enums/Booking";
import PropertyType from "@/enums/PropertyType";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Book">;

export default function BookScreen({ route }: Props) {
  const { navigate } = useNavigation<StackNavigation>();
  const { books, setBooks } = useBookingContext();
  const [registerBook, setRegisterBook] = useState<Book | null>(null);

  const [property, setProperty] = useState<PropertyType>(PropertyType.home);
  const [units, setUnits] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const { params } = route;

  useEffect(() => {
    setRegisterBook({
      service: params.data,
      referenceCode: "#D-571224",
      schedule: "8:00-9:00 AM,  09 Dec",
      status: Status.confirmed,
      bedrooms,
      units,
      description,
      propertyType: property,
    });
  }, [bedrooms, description, params.data, property, units]);

  // TO-DO: Improve synchronous setState
  const handleSubmit = useCallback(
    (bookingType: BookingType) => {
      let updatedBooks: Book[];
      if (registerBook) {
        const newRegistry: Book | null = {
          bookingType,
          ...registerBook,
        };
        if (books) {
          updatedBooks = [...books, newRegistry];
          setBooks(updatedBooks);
        } else {
          setBooks([registerBook]);
        }
        console.log(books);
      }
    },
    [books, registerBook, setBooks]
  );

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* image container */}
        <ImageBackground
          style={styles.ImageBackground}
          source={{
            uri: params.data.image,
          }}
          resizeMode="cover"
        >
          {/* gradient */}
          <LinearGradient
            style={styles.gradient}
            colors={["rgba(63, 63, 63, 0)", "rgba(0, 0, 0, 0.7)"]}
            locations={[0.5, 1]}
          >
            {/* badge */}
            <View style={styles.badge}>
              <AntDesign
                name="star"
                size={10}
                color={Theme.colors.background}
              />
              <Text style={styles.badgeText}>{params.data.stars.score}</Text>
            </View>
            <Text style={styles.serviceTitle}>{params.data.title}</Text>
          </LinearGradient>
        </ImageBackground>

        {/* book options */}
        <View style={styles.bookContainer}>
          <View style={styles.bookContent}>
            {/* Property container */}
            <PropertiesComponent
              property={property}
              onButtonPress={setProperty}
            />
            {/* Quantity container */}
            <QuantitiesComponent
              units={units}
              onUnitChange={setUnits}
              bedrooms={bedrooms}
              onBedroomChange={setBedrooms}
            />

            {/* Description container */}
            <DescriptionComponent handleChange={setDescription} />
          </View>
        </View>
      </ScrollView>
      <BookFooter handleSubmit={handleSubmit} data={params.data} />
    </View>
  );
}
