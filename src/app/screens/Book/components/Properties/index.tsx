import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// styles
import Theme from '@/styles/Theme'
import { globalStyles } from '../../styles'
import styles from './styles'
// icons
import { Entypo, EvilIcons, Feather, Ionicons } from '@expo/vector-icons'
// enums
import Properties from '../../enums/Properties'
// components
import { StackNavigation } from '@/routes'
import { useNavigation } from '@react-navigation/native'
import BookIconButton from '../BookIconButton'

type PropertiesProps = {
  property: Properties
  onButtonPress: (value: React.SetStateAction<Properties>) => void
}

export default function PropertiesComponent({
  property,
  onButtonPress,
}: PropertiesProps) {
  const { goBack } = useNavigation<StackNavigation>()

  return (
    <View style={globalStyles.optionsContainer}>
      {/* header */}
      <View style={globalStyles.propertyHeader}>
        <View style={globalStyles.line} />
        <Text style={globalStyles.headerTitle}>Type of Property</Text>
        <TouchableOpacity
          style={{ marginLeft: 'auto' }}
          onPress={() => goBack()}
        >
          <EvilIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
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
