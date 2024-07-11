import Theme from '@/styles/Theme'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Properties from '../enums/Properties'
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
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => onButtonPress(Properties.home)}
        >
          <View
            style={[
              styles.bookIconContainer,
              property === Properties.home
                ? { borderColor: Theme.colors.primary.background }
                : {
                    borderColor: '#D1D3D4',
                  },
            ]}
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
          </View>
          <Text style={styles.bookButtonText}>Home</Text>
        </TouchableOpacity>

        {/* office property */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => onButtonPress(Properties.office)}
        >
          <View
            style={[
              styles.bookIconContainer,
              property === Properties.office
                ? { borderColor: Theme.colors.primary.background }
                : {
                    borderColor: '#D1D3D4',
                  },
            ]}
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
          </View>
          <Text style={styles.bookButtonText}>Office</Text>
        </TouchableOpacity>

        {/* vila property */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => onButtonPress(Properties.vila)}
        >
          <View
            style={[
              styles.bookIconContainer,
              property === Properties.vila
                ? { borderColor: Theme.colors.primary.background }
                : {
                    borderColor: '#D1D3D4',
                  },
            ]}
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
          </View>
          <Text style={styles.bookButtonText}>Vila</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
