import { Text, View } from 'react-native'
// styles
import styles from './styles'
// expo
// navigation

export default function DraftComponent() {
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
