import { Text, TouchableOpacity, View } from 'react-native'
// styles
import styles from './styles'
// expo
import { Image } from 'expo-image'
// navigation
import { StackNavigation } from '@/routes'
import { useNavigation } from '@react-navigation/native'

export default function NoContentComponent() {
  const { navigate } = useNavigation<StackNavigation>()
  return (
    <View style={styles.container}>
      <Image
        alt="check-list"
        style={styles.image}
        source={require('../../assets/check-list.png')}
      />
      <View style={styles.noContentText}>
        <Text style={styles.noContentTitle}>No Upcoming Order</Text>
        <Text style={styles.noContentParagraph}>
          Currently you don’t have any upcoming order. Place and track your
          orders from here.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.allServicesButton}
        onPress={() => navigate('Home')}
      >
        <Text style={styles.buttonText}>View all services</Text>
      </TouchableOpacity>
    </View>
  )
}
