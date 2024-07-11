import { Button, View } from 'react-native'
import styles from './styles'

export default function BookFooter() {
  return (
    <View style={styles.container}>
      {/* bill info */}
      <View></View>
      {/* button group */}
      <View>
        <Button title="Save draft" />
        <Button title="Book Now" />
      </View>
    </View>
  )
}
