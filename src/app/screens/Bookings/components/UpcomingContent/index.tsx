import React from 'react'
import { View } from 'react-native'

// types
import Book from '@/app/types/Book'

// components
import BookCard from '../BookCard'

import { useBookingContext } from '@/context/booking'
import styles from './styles'

type Props = {
  data: Book
}

export default function UpcomingContent({ data }: Props) {
  const { books } = useBookingContext()
  return (
    <View style={styles.container}>
      {books?.map((book, index) => {
        return <BookCard key={index} data={book} />
      })}
    </View>
  )
}
