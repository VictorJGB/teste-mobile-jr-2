import { Text, TouchableOpacity, View } from 'react-native'

// styles
import styles from './styles'

// icons
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

export default function BookFooter() {
  return (
    <View style={styles.container}>
      {/* bill info */}
      <View style={styles.billContainer}>
        {/* price */}
        <View style={styles.billTextContainer}>
          <Text style={styles.billTotalText}>Total: </Text>
          <Text style={styles.billPrice}>USD 150.05</Text>
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
