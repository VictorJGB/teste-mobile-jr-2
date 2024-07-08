import { StackNavigation } from '@/routes'
import { useNavigation } from '@react-navigation/native'
import { Button, Text } from 'react-native'
import { Container } from './styles'

export default function HomeScreen() {
  const { navigate } = useNavigation<StackNavigation>()

  return (
    <Container>
      <Text>Home Page!</Text>
      <Button title="Go to Servicos" onPress={() => navigate('Servicos')} />
    </Container>
  )
}
