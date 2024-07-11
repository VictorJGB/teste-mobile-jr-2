import React, { useState } from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'

import { styles } from './styles'

// icons
import Theme from '@/styles/Theme'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import BookFooter from './components/BookFooter'
import DescriptionComponent from './components/Description'
import PropertiesComponent from './components/Properties'
import QuantitiesComponent from './components/Quantities'
import Properties from './enums/Properties'

export default function BookScreen() {
  const [property, setProperty] = useState<Properties>(Properties.home)
  const [units, setUnits] = useState<number>(0)
  const [bedrooms, setBedrooms] = useState<number>(0)

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* image container */}
        <ImageBackground
          style={styles.ImageBackground}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/c88c/d0f0/e38bd9f4e9ddaa793e4a9977de62dce4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dnDwrUeR2VmkNmwxVivfasZjt3scX8CS2qTtHkzKGA34MAE6vQP1jtK9dZzBPd-LfZh2fGUHzxGzUp-t2xhsAoUCXDg5qhrUO8tdb1Se2-uogRpO7kf2yhPJ~jiBBvLDVnE0xmYsRcndhefo305Nq9VL1sB-qbzb0jmwqr8kyyGhYfEmDuU8AFovB9ly~OfRZ8yosMRzqFJO5Xh-5W-YVU2ySxoSIj3nv0RYWbD7r13oDXpnNImlxBsU5q1vPCx9CzB14yEuq5R5jAVm5uyuwp7mSgDV-Q9cdGjQCe1WCYrnDCxZBlX7Tx2OMnwBf05Ud8NuIa~94L-kkPaTsqwGzg__',
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
              <Text style={styles.badgeText}>4.5</Text>
            </View>
            <Text style={styles.serviceTitle}>Ac Regular Service</Text>
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
      <BookFooter />
    </View>
  )
}
