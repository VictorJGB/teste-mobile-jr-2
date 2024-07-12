import { Text, View } from 'react-native'
// styles
import styles from './styles'

export default function HistoryComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.noContentText}>
        <Text style={styles.noContentTitle}>History</Text>
        <Text style={styles.noContentParagraph}>Check out what you booked</Text>
      </View>
    </View>
  )
}
