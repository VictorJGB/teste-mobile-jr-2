import Theme from '@/styles/Theme'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import Properties from '../../enums/Properties'
import BookIconButton from '../BookIconButton'
import styles from './styles'

type PropertiesProps = {
  property: Properties
  onButtonPress: (value: React.SetStateAction<Properties>) => void
}

export default function PropertiesComponent({
  property,
  onButtonPress,
}: PropertiesProps) {
  return (
    <View style={styles.optionsContainer}>
      {/* header */}
      <View style={styles.propertyHeader}>
        <View style={styles.line} />
        <Text style={styles.headerTitle}>Type of Property</Text>
      </View>

      {/* button group */}
      <View style={styles.buttonGroup}>
        {/* home property */}
        <BookIconButton
          text="Home"
          onPress={() => onButtonPress(Properties.home)}
          iconContainerStyle={
            property === Properties.home && {
              borderColor: Theme.colors.primary.background,
            }
          }
        >
          <Feather
            name="home"
            size={24}
            color={
              property === Properties.home
                ? Theme.colors.primary.background
                : '#D1D3D4'
            }
          />
        </BookIconButton>

        {/* office property */}
        <BookIconButton
          text="Office"
          onPress={() => onButtonPress(Properties.office)}
          iconContainerStyle={
            property === Properties.office && {
              borderColor: Theme.colors.primary.background,
            }
          }
        >
          <Ionicons
            name="business"
            size={24}
            color={
              property === Properties.office
                ? Theme.colors.primary.background
                : '#D1D3D4'
            }
          />
        </BookIconButton>

        {/* vila property */}
        <BookIconButton
          text="Vila"
          onPress={() => onButtonPress(Properties.vila)}
          iconContainerStyle={
            property === Properties.vila && {
              borderColor: Theme.colors.primary.background,
            }
          }
        >
          <Entypo
            name="shop"
            size={24}
            color={
              property === Properties.vila
                ? Theme.colors.primary.background
                : '#D1D3D4'
            }
          />
        </BookIconButton>
      </View>
    </View>
  )
}
