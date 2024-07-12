import { Text, View } from 'react-native'
// styles
import Book from '@/app/types/Book'
import BookCard from '../BookCard'
import styles from './styles'

type Props = {
  data: Book[] | null
}

export default function DraftComponent({ data }: Props) {
  if (!data) {
    return (
      <View style={styles.container}>
        <View style={styles.noContentText}>
          <Text style={styles.noContentTitle}>Drafts</Text>
          <Text style={styles.noContentParagraph}>
            Return from where you stopped
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.dataContainer}>
      {data.map((book, index) => {
        return <BookCard key={index} data={book} />
      })}
    </View>
  )
}
