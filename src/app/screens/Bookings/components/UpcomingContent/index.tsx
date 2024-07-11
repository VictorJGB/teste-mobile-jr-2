import Book from "@/app/types/Book";
import React from "react";
import { View } from "react-native";
import BookCard from "../BookCard";

type Props = {
  data: Book;
};

export default function UpcomingContent({ data }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <BookCard data={data} />
    </View>
  );
}
