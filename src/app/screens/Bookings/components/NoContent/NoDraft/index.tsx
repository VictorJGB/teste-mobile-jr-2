import { Text, View } from 'react-native'
import styles from './styles'

export default function NoDraftComponent() {
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
