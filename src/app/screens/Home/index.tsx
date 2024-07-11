import React from 'react'
// icons
import { Feather } from '@expo/vector-icons'
// components
import PrimaryButton from '@/components/AppButton/PrimaryButton'
import { ScrollView, TextInput, View } from 'react-native'
import ServiceListComponent from './components/ServiceList'
// data
import { ServicesData } from '@/data/services'
// styles
import Theme from '@/styles/Theme'
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        {ServicesData.map((serviceList, index) => {
          return <ServiceListComponent key={index} data={serviceList} />
        })}
      </ScrollView>
    </View>
  )
}
