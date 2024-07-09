import React from 'react'
// icons
import { Feather } from '@expo/vector-icons'
// components
import { TextInput, View } from 'react-native'

import PrimaryButton from '@/components/AppButton/PrimaryButton'
import Theme from '@/styles/Theme'
import ServiceList from './components/ServiceList'
import { styles } from './styles'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* top navigation */}
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
      <ServiceList title="AC Manutenção" />
    </View>
  )
}
