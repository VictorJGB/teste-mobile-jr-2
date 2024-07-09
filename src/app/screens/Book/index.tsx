import { StackNavigation } from '@/routes'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

export default function BookScreen() {
  const { navigate } = useNavigation<StackNavigation>()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Agenda</Text>
      <Button title="Go back" onPress={() => navigate('Home')} />
    </View>
  )
}
