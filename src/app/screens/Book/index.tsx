import React, { useState } from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'
// icons
import { AntDesign } from '@expo/vector-icons'
// styles
import Theme from '@/styles/Theme'
import { styles } from './styles'
// gradient
import { LinearGradient } from 'expo-linear-gradient'
// components
import BookFooter from './components/BookFooter'
import DescriptionComponent from './components/Description'
import PropertiesComponent from './components/Properties'
import QuantitiesComponent from './components/Quantities'
// navigation
import { RootStackParamList } from '@/routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
// enums
import Properties from './enums/Properties'

type Props = NativeStackScreenProps<RootStackParamList, 'Book'>

export default function BookScreen({ route }: Props) {
  const [property, setProperty] = useState<Properties>(Properties.home)
  const [units, setUnits] = useState<number>(0)
  const [bedrooms, setBedrooms] = useState<number>(0)
  const { params } = route

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* image container */}
        <ImageBackground
          style={styles.ImageBackground}
          source={{
            uri: params.data.image,
          }}
          resizeMode="cover"
        >
          {/* gradient */}
          <LinearGradient
            style={styles.gradient}
            colors={['rgba(63, 63, 63, 0)', 'rgba(0, 0, 0, 0.7)']}
            locations={[0.5, 1]}
          >
            {/* badge */}
            <View style={styles.badge}>
              <AntDesign
                name="star"
                size={10}
                color={Theme.colors.background}
              />
              <Text style={styles.badgeText}>{params.data.stars.score}</Text>
            </View>
            <Text style={styles.serviceTitle}>{params.data.title}</Text>
          </LinearGradient>
        </ImageBackground>

        {/* book options */}
        <View style={styles.bookContainer}>
          <View style={styles.bookContent}>
            {/* Property container */}
            <PropertiesComponent
              property={property}
              onButtonPress={setProperty}
            />
            {/* Quantity container */}
            <QuantitiesComponent
              units={units}
              onUnitChange={setUnits}
              bedrooms={bedrooms}
              onBedroomChange={setBedrooms}
            />

            {/* Description container */}
            <DescriptionComponent />
          </View>
        </View>
      </ScrollView>
      <BookFooter data={params.data} />
    </View>
  )
}
