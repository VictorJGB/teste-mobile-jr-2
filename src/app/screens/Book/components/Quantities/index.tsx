import React from 'react'
import { Text, View } from 'react-native'

// global book screen styles
import BookScreenStyles from '../../styles'

// local component styles
import styles from './styles'

// icons
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
  return (
    <View style={BookScreenStyles.optionsContainer}>
      {/* Units */}
      <View style={styles.numberContainer}>
        <Text style={styles.numbersTitle}>Number of units</Text>

        {/* button group */}
        <View style={styles.buttonGroup}>
          <BookIconButton
            onPress={() => onUnitChange(units > 0 ? units - 1 : 0)}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
            }}
          >
            <AntDesign name="minus" size={12} color="black" />
          </BookIconButton>
          <Text>{units}</Text>
          <BookIconButton
            onPress={() => onUnitChange(units + 1)}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
            }}
          >
            <AntDesign name="plus" size={12} color="black" />
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
            onPress={() => onBedroomChange(bedrooms > 0 ? bedrooms - 1 : 0)}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
            }}
          >
            <AntDesign name="minus" size={12} color="black" />
          </BookIconButton>
          <Text>{bedrooms}</Text>
          <BookIconButton
            onPress={() => onBedroomChange(bedrooms + 1)}
            iconContainerStyle={{
              padding: 11,
              borderRadius: 12,
            }}
          >
            <AntDesign name="plus" size={12} color="black" />
          </BookIconButton>
        </View>
      </View>
    </View>
  )
}
