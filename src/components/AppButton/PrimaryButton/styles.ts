import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: Theme.colors.primary.background,
    color: Theme.colors.primary.textColor,
    fontFamily: Theme.fonts.fontFamily.bold,
  },
})

export default styles
