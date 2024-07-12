import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// styles
import styles from './styles'
// icons
import { MaterialIcons } from '@expo/vector-icons'
// navigation
import Service from '@/app/types/Service'
import { BookingType } from '@/enums/Booking'

type Props = {
  data: Service
  handleSubmit: (bookingType: BookingType) => void
}

export default function BookFooter({ data, handleSubmit }: Props) {
  return (
    <View style={styles.container}>
      {/* bill info */}
      <View style={styles.billContainer}>
        {/* price */}
        <View style={styles.billTextContainer}>
          <Text style={styles.billTotalText}>Total: </Text>
          <Text style={styles.billPrice}>USD {data.price}</Text>
        </View>

        <TouchableOpacity style={styles.billDetailsContainer}>
          <Text style={styles.billDetailLabel}>Bill Details</Text>
          <MaterialIcons name="keyboard-arrow-up" size={10} color="#FC944D" />
        </TouchableOpacity>
      </View>
      {/* button group */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => handleSubmit(BookingType.draft)}
          style={styles.draftButton}
        >
          <Text style={styles.draftButtonText}>Save draft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSubmit(BookingType.upcoming)}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
