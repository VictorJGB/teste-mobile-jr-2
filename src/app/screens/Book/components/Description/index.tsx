import React, { Dispatch, SetStateAction } from 'react'
import { Text, TextInput, View } from 'react-native'

// book screen styles
import { globalStyles } from '../../styles'

// local styles
import styles from './styles'

type Props = {
  handleChange: Dispatch<SetStateAction<string>>
}

export default function DescriptionComponent({ handleChange }: Props) {
  return (
    <View style={[globalStyles.optionsContainer, { marginBottom: 124 }]}>
      {/* header */}
      <View style={globalStyles.propertyHeader}>
        <View style={globalStyles.line} />
        <Text style={globalStyles.headerTitle}>Description</Text>
      </View>

      {/* textarea */}
      <TextInput
        style={styles.textarea}
        multiline
        numberOfLines={3}
        onChangeText={(e) => handleChange(e)}
        placeholder="Write an description..."
      />
    </View>
  )
}
