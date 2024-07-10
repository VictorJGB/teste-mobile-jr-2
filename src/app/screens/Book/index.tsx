import React from 'react'
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

// icons
import Theme from '@/styles/Theme'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export default function BookScreen() {
  return (
    <View style={styles.container}>
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
            <AntDesign name="star" size={10} color={Theme.colors.background} />
            <Text style={styles.badgeText}>4.5</Text>
          </View>
          <Text style={styles.serviceTitle}>Ac Regular Service</Text>
        </LinearGradient>
      </ImageBackground>

      {/* book options */}
      <View>
        {/* Property container */}
        <View>
          {/* header */}
          <View>
            <View />
            <Text>Type of Property</Text>
          </View>
        </View>

        {/* button group */}
        <View>
          {/* home property */}
          <TouchableOpacity>
            <View>
              <Feather name="home" size={24} color="#D1D3D4" />
            </View>
            <Text>Home</Text>building
          </TouchableOpacity>

          {/* office property */}
          <TouchableOpacity>
            <View>
              <Ionicons
                name="business"
                size={24}
                color={Theme.colors.primary.background}
              />
            </View>
            <Text>Office</Text>
          </TouchableOpacity>

          {/* vila property */}
          <TouchableOpacity>
            <View>
              <Entypo name="shop" size={24} color="black" />
            </View>
            <Text>Vila</Text>
          </TouchableOpacity>
        </View>

        {/* Quantity container */}
        <View>
          {/* Units */}
          <View>
            <Text>Number of units</Text>

            {/* button group */}
            <View>
              <TouchableOpacity>
                <AntDesign name="minus" size={24} color="black" />
              </TouchableOpacity>
              <Text>2</Text>
              <TouchableOpacity>
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Bedrooms */}
          <View>
            <Text>Number of Bedrooms</Text>

            {/* button group */}
            <View>
              <TouchableOpacity>
                <AntDesign name="minus" size={24} color="black" />
              </TouchableOpacity>
              <Text>0</Text>
              <TouchableOpacity>
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Description container */}
        <View>
          {/* header */}
          <View>
            <View />
            <Text>Description</Text>
          </View>

          {/* textarea */}
          <TextInput
            multiline
            numberOfLines={5}
            placeholder="Write an description..."
          />
        </View>
      </View>
    </View>
  )
}
