import { Image } from 'expo-image'
import { Text, View } from 'react-native'

// icons
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

import styles from './style'

export default function ServiceCard() {
  return (
    <View style={styles.container}>
      {/* image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          contentFit="cover"
          alt="service-img"
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/69d5/0e8c/19328e04bf427e513648bf4d9283c7ce?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wo4uz8vcdgoSutOj9BfRmtnTfw-8e28tmVYbEdrGDphyTsrqLJGbfPuKssHV~MHpKaC43LKZsZ1eGfWq1hjiVQiKB~W3AJ175tfGd7idh1dcqD7QNmsU4cTqLpqhQHAYEaopkvqlQZV8Jkl~PQ0XSmkZX1XsK1KHXFhJgq5u1~PeHqkiHGonNLdGCuTJ1jUVMD9v01avfL2hardhu-2WI34v6QmMFZjvu9biJgCULknasvvMwyYxXE~6Y36AryreswiLCVeaN6MrRhyXhTg2~3P7~rw2jxGWrXYN~G8~jPwiCb7QEBM-iN3xICiYqs58WJo1g3di2F3TyTyf2mPyTw__',
          }}
        />
      </View>
      {/* infos */}
      <View style={styles.infosContainer}>
        {/* star */}
        <View style={styles.starsContainer}>
          <AntDesign name="star" size={16} color="#FFC554" />
          <View style={styles.starsContainer}>
            <Text style={styles.starScore}>4.8</Text>
            <Text style={styles.starQuantity}>(87)</Text>
          </View>
        </View>
        <Text style={styles.serviceTitle}>AC Checkup</Text>
        <Text style={styles.startsFrom}>Starts from</Text>
        {/* badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeInfo}>$128</Text>
        </View>
      </View>
      {/* options */}
      <View style={styles.optionsContainer}>
        <SimpleLineIcons name="options" size={20} color="#6F767E" />
      </View>
    </View>
  )
}
