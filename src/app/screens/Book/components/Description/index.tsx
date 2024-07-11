import React from 'react'
import { Text, TextInput, View } from 'react-native'

// book screen styles
import { globalStyles } from '../../styles'

// local styles

export default function DescriptionComponent() {
  return (
    <View style={globalStyles.optionsContainer}>
      {/* header */}
      <View style={globalStyles.propertyHeader}>
        <View style={globalStyles.line} />
        <Text style={globalStyles.headerTitle}>Description</Text>
      </View>

      {/* textarea */}
      <TextInput
        multiline
        numberOfLines={3}
        placeholder="Write an description..."
      />
    </View>
  )
}
