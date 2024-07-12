import React from 'react'
import { View } from 'react-native'

// types
import Book from '@/app/types/Book'

// components
import BookCard from '../BookCard'

import NoUpcomingContent from '../NoContent/NoUpcomingContent'
import styles from './styles'

type Props = {
  data: Book[] | null
}

export default function UpcomingContent({ data }: Props) {
  if (!data) return <NoUpcomingContent />

  return (
    <View style={styles.container}>
      {data.map((book, index) => {
        return <BookCard key={index} data={book} />
      })}
    </View>
  )
}
