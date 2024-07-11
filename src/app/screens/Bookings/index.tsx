import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
// navigation
import { StackNavigation } from '@/routes'
// styles
import styles from './styles'

export default function BookingsScreen() {
  const { navigate } = useNavigation<StackNavigation>()

  return (
    <View style={styles.container}>
      <Text>Servicos Screen</Text>
      <Button title="Go back" onPress={() => navigate('Home')} />
    </View>
  )
}
