import { Image } from 'expo-image'
import { Text, TouchableOpacity, View } from 'react-native'

// icons
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

import Service from '@/app/types/Service'
import styles from './style'
import Theme from '@/styles/Theme'

type cardProps = {
  data: Service
}

export default function ServiceCard({ data }: cardProps) {
  return (
    <View style={styles.container}>
      {/* image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          contentFit="cover"
          alt="service-img"
          source={{
            uri: data.image,
          }}
        />
      </View>
      {/* infos */}
      <View style={styles.infosContainer}>
        {/* star */}
        <View style={styles.starsContainer}>
          <AntDesign name="star" size={16} color="#FFC554" />
          <View style={styles.starsContainer}>
            <Text style={styles.starScore}>{data.stars.score}</Text>
            <Text style={styles.starQuantity}>{data.stars.quantity}</Text>
          </View>
        </View>
        <Text style={styles.serviceTitle}>{data.title}</Text>
        <Text style={styles.startsFrom}>{data.startsFrom}</Text>
        {/* badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeInfo}>${data.price}</Text>
        </View>
      </View>
      {/* options */}
      <TouchableOpacity style={styles.optionsContainer}>
        <SimpleLineIcons name="options" size={20} color={Theme.colors.grey} />
      </TouchableOpacity>
    </View>
  )
}
