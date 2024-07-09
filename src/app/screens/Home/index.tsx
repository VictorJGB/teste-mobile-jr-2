import React from 'react'
// icons
import { Feather } from '@expo/vector-icons'
// components
import { Button, Text, TextInput, View } from 'react-native'
// routes
import { StackNavigation } from '@/routes'
// react navigation
import { useNavigation } from '@react-navigation/native'

import PrimaryButton from '@/components/AppButton/PrimaryButton'
import Theme from '@/styles/Theme'
import { styles } from './styles'

export default function HomeScreen() {
  const { navigate } = useNavigation<StackNavigation>()

  return (
    <View style={styles.container}>
      <View style={styles.topNavigation}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.navigationInput}
            placeholder="Search container"
          />
          <PrimaryButton
            style={{
              padding: 10,
            }}
          >
            <Feather
              name="search"
              size={14}
              color={Theme.colors.primary.textColor}
            />
          </PrimaryButton>
        </View>
      </View>
      <Text>Home Page!</Text>
      <Button title="Go to Servicos" onPress={() => navigate('Services')} />
    </View>
  )
}
