import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// types
import Book from '@/app/types/Book'
// expo
import { Image } from 'expo-image'

// icons
import Theme from '@/styles/Theme'
import { Feather } from '@expo/vector-icons'
import styles from './styles'

type Props = {
  data: Book
}

export default function BookCard({ data }: Props) {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        {/* image container */}
        <View style={styles.categoryImage}>
          <Image
            alt="category icon"
            style={{ width: 30, height: 20 }}
            source={data.service.category}
          />
        </View>

        {/* infos */}
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>{data.service.title}</Text>
          <Text style={styles.headerSubtitle}>
            Reference Code:{data.referenceCode}
          </Text>
        </View>
      </View>

      {/* divider */}
      <View style={styles.divider} />

      {/* body */}
      <View style={styles.cardBody}>
        {/* body header */}
        <View style={styles.bodyHeader}>
          <Text style={styles.statusLabel}>Status</Text>
          <Text
            style={
              data.status === 'confirmed'
                ? styles.statusConfirmed
                : styles.statusPending
            }
          >
            {data.status}
          </Text>
        </View>

        {/* schedule */}
        <View style={styles.scheduleContainer}>
          <View style={styles.scheduleIconContainer}>
            <Feather name="calendar" size={18} color={Theme.colors.grey} />
          </View>
          <View style={styles.scheduleInfoContainer}>
            <Text style={styles.scheduleDate}>{data.schedule}</Text>
            <Text style={styles.scheduleLabel}>Schedule</Text>
          </View>
        </View>

        {/* provider */}
        <View style={styles.providerContainer}>
          {/* logo */}
          <View style={styles.providerLogoContainer}>
            <Image
              alt="providerLogo"
              style={{ width: 25 }}
              source={data.service.provider.logo}
            />
          </View>
          <View style={styles.providerInfoContainer}>
            <Text style={styles.providerName}>
              {data.service.provider.name}
            </Text>
            <Text style={styles.providerLabel}>Service provider</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Feather name="phone" size={24} color="#FCFCFC" />
            <Text style={styles.callButtonText}>call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
