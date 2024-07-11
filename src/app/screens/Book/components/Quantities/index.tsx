import React, { useState } from 'react'
import { Text, View } from 'react-native'

// global book screen styles
import { globalStyles } from '../../styles'

// local component styles
import styles from './styles'

// icons
import Theme from '@/styles/Theme'
import { AntDesign } from '@expo/vector-icons'
import BookIconButton from '../BookIconButton'

type Props = {
  units: number
  bedrooms: number
  onUnitChange: React.Dispatch<React.SetStateAction<number>>
  onBedroomChange: React.Dispatch<React.SetStateAction<number>>
}

export default function QuantitiesComponent({
  units,
  onUnitChange,
  onBedroomChange,
  bedrooms,
}: Props) {
  const [lastPressed, setLastPressedColor] = useState<'units' | 'bedrooms'>(
    'units',
  )
  return (
    <View style={globalStyles.optionsContainer}>
      {/* Units */}
      <View style={styles.numberContainer}>
        <Text style={styles.numbersTitle}>Number of units</Text>

        {/* button group */}
        <View style={styles.buttonGroup}>
          <BookIconButton
            onPress={() => {
              setLastPressedColor('units')
              onUnitChange(units > 0 ? units - 1 : 0)
            }}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
              backgroundColor:
                lastPressed === 'units' && units > 0
                  ? Theme.colors.primary.background
                  : Theme.colors.background,
            }}
          >
            <AntDesign
              name="minus"
              size={12}
              color={
                lastPressed === 'units'
                  ? Theme.colors.background
                  : units > 0
                    ? Theme.colors.black
                    : '#D1D3D4'
              }
            />
          </BookIconButton>
          <Text>{units}</Text>
          <BookIconButton
            onPress={() => {
              setLastPressedColor('units')
              onUnitChange(units + 1)
            }}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
              backgroundColor:
                lastPressed === 'units'
                  ? Theme.colors.primary.background
                  : Theme.colors.background,
            }}
          >
            <AntDesign
              name="plus"
              size={12}
              color={
                lastPressed === 'units'
                  ? Theme.colors.background
                  : units > 0
                    ? Theme.colors.black
                    : '#D1D3D4'
              }
            />
          </BookIconButton>
        </View>
      </View>

      {/* divider */}
      <View style={styles.divider} />

      {/* Bedrooms */}
      <View style={styles.numberContainer}>
        <Text style={styles.numbersTitle}>Number of Bedrooms</Text>

        {/* button group */}
        <View style={styles.buttonGroup}>
          <BookIconButton
            onPress={() => {
              setLastPressedColor('bedrooms')
              onBedroomChange(bedrooms > 0 ? bedrooms - 1 : 0)
            }}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
              backgroundColor:
                lastPressed === 'bedrooms' && bedrooms > 0
                  ? Theme.colors.primary.background
                  : Theme.colors.background,
            }}
          >
            <AntDesign
              name="minus"
              size={12}
              color={
                lastPressed === 'bedrooms'
                  ? Theme.colors.background
                  : bedrooms > 0
                    ? Theme.colors.black
                    : '#D1D3D4'
              }
            />
          </BookIconButton>
          <Text>{bedrooms}</Text>
          <BookIconButton
            onPress={() => {
              setLastPressedColor('bedrooms')
              onBedroomChange(bedrooms + 1)
            }}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
              backgroundColor:
                lastPressed === 'bedrooms'
                  ? Theme.colors.primary.background
                  : Theme.colors.background,
            }}
          >
            <AntDesign
              name="plus"
              size={12}
              color={
                lastPressed === 'bedrooms'
                  ? Theme.colors.background
                  : bedrooms > 0
                    ? Theme.colors.black
                    : '#D1D3D4'
              }
            />
          </BookIconButton>
        </View>
      </View>
    </View>
  )
}
