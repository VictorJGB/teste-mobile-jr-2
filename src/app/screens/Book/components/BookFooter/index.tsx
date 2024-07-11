import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// styles
import styles from './styles'
// icons
import { MaterialIcons } from '@expo/vector-icons'
// navigation
import Service from '@/app/types/Service'

type Props = {
  data: Service
}

export default function BookFooter({ data }: Props) {
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
        <TouchableOpacity style={styles.draftButton}>
          <Text style={styles.draftButtonText}>Save draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
